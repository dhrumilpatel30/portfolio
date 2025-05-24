// src/components/ThemeToggle.ts
export class ThemeToggle {
  private isDarkMode: boolean = false;
  private button!: HTMLButtonElement;

  constructor() {
    this.init();
  }

  private init(): void {
    this.setInitialTheme();
    this.createToggleButton();
  }

  private setInitialTheme(): void {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      this.isDarkMode = storedTheme === "dark";
    } else {
      this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  private createToggleButton(): void {
    const container = document.createElement("div");
    container.className = "fixed top-4 right-4 sm:right-9 z-10";

    this.button = document.createElement("button");
    this.button.className = "p-2 rounded-full hover:bg-gray-200/10 dark:hover:bg-gray-800/10 transition-colors";
    this.button.setAttribute("aria-label", this.getAriaLabel());
    this.button.innerHTML = this.getIconSVG();
    this.button.addEventListener("click", () => this.toggle());

    container.appendChild(this.button);
    document.body.appendChild(container);
  }

  private toggle(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.button.innerHTML = this.getIconSVG();
    this.button.setAttribute("aria-label", this.getAriaLabel());
  }

  private getAriaLabel(): string {
    return this.isDarkMode ? "Switch to light mode" : "Switch to dark mode";
  }

  private getIconSVG(): string {
    return this.isDarkMode ? this.getMoonIcon() : this.getSunIcon();
  }

  private getMoonIcon(): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-300"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
  }

  private getSunIcon(): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-800"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
  }
}
