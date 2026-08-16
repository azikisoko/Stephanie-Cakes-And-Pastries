import { client } from "../../../lib/sanity";
import { allFaqsQuery } from "../../../lib/queries";
import { FaqAccordion } from "../../../components/faq/faq-accordion";
import { customOrderWhatsappLink } from "../../../lib/whatsapp";

export const metadata = {
  title: "FAQ | Stephanie Cakes & Pastries",
  description:
    "Answers to common questions about ordering, delivery, payment, and custom cakes from Stephanie Cakes & Pastries in Abuja.",
};

export default async function FaqPage() {
  const faqs = await client.fetch(allFaqsQuery);

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="mb-16 text-center">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            FAQ
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text">
            Frequently Asked
            <br />
            Questions
          </h1>
        </div>

        {faqs && faqs.length > 0 ? (
          <FaqAccordion faqs={faqs} />
        ) : (
          <p className="font-body text-text-secondary text-center">
            FAQs coming soon.
          </p>
        )}

        <div className="mt-20 md:mt-32 max-w-2xl mx-auto bg-surface-secondary rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-text mb-3">
            Still have questions?
          </h2>
          <p className="font-body text-text-secondary mb-6">
            Reach out directly and we&apos;ll be happy to help.
          </p>
          <a
            href={customOrderWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent text-white rounded-pill px-8 h-12 items-center justify-center font-body text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
