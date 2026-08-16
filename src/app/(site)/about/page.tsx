import { client } from "../../../lib/sanity";
import { aboutPageQuery } from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity-image";
import { PortableText } from "@portabletext/react";

export const metadata = {
  title: "About | Stephanie Cakes & Pastries",
  description:
    "The story behind Stephanie Cakes & Pastries — handcrafted cakes and pastries made with intention, based in Abuja.",
};

export default async function AboutPage() {
  const about = await client.fetch(aboutPageQuery);

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text">
            {about?.headline || "More than cake."}
          </h1>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-secondary order-1 md:order-none">
            {about?.founderPhoto ? (
              <img
                src={urlFor(about.founderPhoto).width(900).fit("max").url()}
                alt={about.founderName || "Founder"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-body text-sm text-text-muted">
                  Founder photo coming soon
                </span>
              </div>
            )}
          </div>

          <div className="prose-custom">
            {about?.storyText ? (
              <PortableText value={about.storyText} />
            ) : (
              <>
                <p className="font-body text-text-secondary leading-relaxed mb-4">
                  Every creation begins with an occasion, a feeling, and an idea
                  worth celebrating.
                </p>
                <p className="font-body text-text-secondary leading-relaxed">
                  Stephanie Cakes & Pastries was born out of a love for bringing
                  people's celebrations to life — one cake, one pastry, one
                  detail at a time.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Supporting Gallery Images */}
        {about?.galleryImages && about.galleryImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {about.galleryImages.map((img: string, i: number) => (
              <div
                key={i}
                className="relative aspect-square rounded-md overflow-hidden bg-surface-secondary"
              >
                <img
                  src={urlFor(img).width(600).fit("max").url()}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
