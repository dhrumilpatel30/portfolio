// src/components/ContactFeatures.ts
export class ContactFeatures {
    private copyConfirmation!: HTMLElement | null;

    constructor() {
        this.init();
    }

    private init(): void {
        this.addCopyLinkListener();
    }

    private addCopyLinkListener(): void {
        const copyLink = document.querySelector('[data-copy-resume]') as HTMLElement;
        this.copyConfirmation = document.querySelector('[data-copy-confirmation]');

        if (copyLink) {
            copyLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleCopyLink();
            });
        }
    }

    private async handleCopyLink(): Promise<void> {
        try {
            const resumeLink = `${window.location.origin}/resume.pdf`;
            await navigator.clipboard.writeText(resumeLink);
            this.showCopyConfirmation();
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    }

    private showCopyConfirmation(): void {
        if (this.copyConfirmation) {
            this.copyConfirmation.classList.remove('opacity-0');
            this.copyConfirmation.classList.add('opacity-100');

            setTimeout(() => {
                this.copyConfirmation?.classList.remove('opacity-100');
                this.copyConfirmation?.classList.add('opacity-0');
            }, 2000);
        }
    }
}
