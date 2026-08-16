import { customOrderWhatsappLink } from "../../../lib/whatsapp";

export const metadata = {
  title: "Custom Orders | Stephanie Cakes & Pastries",
  description:
    "Request a custom cake or pastry order from Stephanie Cakes & Pastries in Abuja.",
};

export default function CustomOrderPage() {
  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10 text-center max-w-xl">
        <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
          Custom Orders
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-text mb-6">
          Let&apos;s create something together.
        </h1>
        <p className="font-body text-text-secondary mb-8">
          Tell us about your occasion and vision, and we&apos;ll help bring it
          to life.
        </p>
        <a
          href={customOrderWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-accent text-white rounded-pill px-8 h-12 items-center justify-center font-body text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
        >
          Start on WhatsApp
        </a>
      </div>
    </main>
  );
}
