import { client } from "../../../lib/sanity";
import { allGalleryItemsQuery } from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity-image";

export const metadata = {
  title: "Gallery | Stephanie Cakes & Pastries",
  description:
    "A look at our past work — cakes, pastries, and celebration designs crafted in Abuja.",
};

type GalleryItem = {
  _id: string;
  image: string;
  caption?: string;
  occasionTags?: string[];
};

export default async function GalleryPage() {
  const items: GalleryItem[] = await client.fetch(allGalleryItemsQuery);

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text mb-4">
            Our Work
          </h1>
          <p className="font-body text-text-secondary">
            A collection of moments we&apos;ve had the honor of celebrating.
          </p>
        </div>

        {items && items.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="break-inside-avoid mb-4 rounded-product overflow-hidden bg-surface-secondary group relative"
              >
                <img
                  src={urlFor(item.image).width(600).fit("max").url()}
                  alt={item.caption || "Gallery image"}
                  className="w-full h-auto block"
                />
                {item.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-body text-sm text-white">
                      {item.caption}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="font-body text-text-secondary text-center py-20">
            Gallery coming soon.
          </p>
        )}
      </div>
    </main>
  );
}
