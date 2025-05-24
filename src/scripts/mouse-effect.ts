// src/components/MouseEffect.ts
export class MouseEffect {
  private overlay!: HTMLElement;

  constructor() {
    this.init();
  }

  private init(): void {
    this.createOverlay();
    this.addEventListeners();
  }

  private createOverlay(): void {
    this.overlay = document.createElement("div");
    this.overlay.className = "overlay hidden sm:block";
    document.body.appendChild(this.overlay);
  }

  private addEventListeners(): void {
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  private handleMouseMove(e: MouseEvent): void {
    const { clientX: x, clientY: y } = e;
    this.overlay.style.setProperty("--x", `${x}px`);
    this.overlay.style.setProperty("--y", `${y}px`);
  }
}
