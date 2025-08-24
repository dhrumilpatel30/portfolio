// src/components/ThemeToggle.ts
export class ThemeToggle {
  private isDarkMode: boolean = false;
  private button!: HTMLButtonElement;

  constructor() {
    this.init();
  }

  private init(): void {
    this.setInitialTheme();
    this.bindExistingButton();
  }

  private setInitialTheme(): void {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      this.isDarkMode = storedTheme === "dark";
    } else {
      // Default to light mode instead of system preference
      this.isDarkMode = false;
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

  private bindExistingButton(): void {
    this.button = document.getElementById("theme-toggle") as HTMLButtonElement;
    if (this.button) {
      this.button.innerHTML = this.getIconSVG();
      this.button.setAttribute("aria-label", this.getAriaLabel());
      this.button.addEventListener("click", () => this.toggle());
    }
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
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>`;
  }

  private getSunIcon(): string {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
    </svg>`;
  }
}
