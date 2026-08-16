import { client } from "../../../lib/sanity";
import { deliveryInfoQuery } from "../../../lib/queries";
import { customOrderWhatsappLink } from "../../../lib/whatsapp";
import { MapPin, Clock, Truck, CalendarClock } from "lucide-react";

export const metadata = {
  title: "Delivery Information | Stephanie Cakes & Pastries",
  description:
    "Delivery areas, fees, and notice periods for orders from Stephanie Cakes & Pastries in Abuja.",
};

export default async function DeliveryPage() {
  const info = await client.fetch(deliveryInfoQuery);

  const cards = [
    {
      icon: MapPin,
      title: "Delivery Areas",
      content:
        info?.deliveryAreas?.length > 0
          ? info.deliveryAreas.join(", ")
          : "We currently deliver within Abuja only.",
    },
    {
      icon: Truck,
      title: "Delivery Fee",
      content:
        info?.deliveryFee ||
        "Delivery fees vary by location — confirmed with you before checkout.",
    },
    {
      icon: CalendarClock,
      title: "Notice Required",
      content:
        info?.deliveryNotice ||
        "Please allow at least 48 hours notice for most orders.",
    },
    {
      icon: Clock,
      title: "Delivery Hours",
      content: info?.deliveryDays || "Monday – Saturday, 9am – 6pm.",
    },
  ];

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            Delivery
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text mb-4">
            Getting Your Order to You
          </h1>
          <p className="font-body text-text-secondary">
            Everything you need to know about delivery within Abuja.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-surface border border-border rounded-lg p-6 md:p-8"
            >
              <div className="w-11 h-11 rounded-pill bg-surface-secondary flex items-center justify-center mb-4 text-accent">
                <card.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-text mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-surface-secondary rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-text mb-3">
            Have a delivery question?
          </h2>
          <p className="font-body text-text-secondary mb-6">
            Reach out and we&apos;ll confirm the details for your specific order
            and location.
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
