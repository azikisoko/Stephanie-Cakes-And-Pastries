import Link from "next/link";
import { client } from "../../lib/sanity";
import { featuredProductsQuery } from "../../lib/queries";
import { ProductCard } from "../../components/product/product-card";
import { urlFor } from "../../lib/sanity-image";

type FeaturedProduct = {
  _id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  startingPrice: number;
  priceNote?: string;
  image?: string;
  categoryTitle?: string;
};

export async function FeaturedCollection() {
  const products = await client.fetch<FeaturedProduct[]>(featuredProductsQuery);

  if (!products || products.length === 0) return null;

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-text max-w-xl">
            A selection of our signature creations.
          </h2>
        </div>

        {/* Masonry Grid */}
        <div
          className="md:columns-3"
          style={{
            columns: "2",
            columnGap: "16px",
          }}
        >
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group block rounded-product overflow-hidden bg-surface border border-border hover:border-border-strong transition-all duration-300 break-inside-avoid mb-4 md:mb-6"
            >
              {/* Image — no height cap, no cropping */}
              {product.image ? (
                <img
                  src={urlFor(product.image).width(800).fit("max").url()}
                  alt={product.name}
                  className="w-full h-auto block transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full aspect-square bg-surface-secondary flex items-center justify-center">
                  <span className="font-body text-xs text-text-muted">
                    No image yet
                  </span>
                </div>
              )}

              {/* Card Info — name only on mobile, full details on desktop */}
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg md:text-2xl text-text leading-tight">
                  {product.name}
                </h3>

                {/* Hidden on mobile, visible on desktop */}
                <div className="hidden md:block mt-3">
                  {product.shortDescription && (
                    <p className="font-body text-sm text-text-secondary mb-3 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="font-body text-sm text-text">
                      <span className="text-text-muted">
                        {product.priceNote || "Starting from"}{" "}
                      </span>
                      <span className="font-semibold">
                        ₦{product.startingPrice.toLocaleString()}
                      </span>
                    </p>
                    <span className="font-body text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      View →
                    </span>
                  </div>
                </div>

                {/* Mobile only — just a subtle tap hint */}
                <p className="md:hidden font-body text-xs text-text-muted mt-1">
                  Tap to view
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/menu"
            className="border border-border text-text rounded-pill px-8 h-12 flex items-center justify-center font-body text-sm font-semibold hover:border-border-strong transition-colors duration-200"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
