"use client";

import { useState } from "react";
import Link from "next/link";
import { urlFor } from "../../lib/sanity-image";

type Product = {
  _id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  startingPrice: number;
  priceNote?: string;
  image?: string;
  categorySlug?: string;
  categoryTitle?: string;
};

type Category = {
  _id: string;
  title: string;
  slug: string;
};

export function MenuGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 md:mb-12 no-scrollbar">
        <button
          onClick={() => setActiveCategory("all")}
          className={`shrink-0 font-body text-sm font-semibold px-5 h-10 rounded-pill border transition-colors duration-200 ${
            activeCategory === "all"
              ? "bg-primary text-bg border-primary"
              : "border-border text-text-secondary hover:border-border-strong"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setActiveCategory(cat.slug)}
            className={`shrink-0 font-body text-sm font-semibold px-5 h-10 rounded-pill border transition-colors duration-200 ${
              activeCategory === cat.slug
                ? "bg-primary text-bg border-primary"
                : "border-border text-text-secondary hover:border-border-strong"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Masonry Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="font-body text-text-secondary text-center py-20">
          No products in this category yet — check back soon.
        </p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-5 gap-4">
          {filteredProducts.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group block rounded-product overflow-hidden bg-surface border border-border hover:border-border-strong transition-all duration-300 break-inside-avoid mb-4 md:mb-6"
            >
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

              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg md:text-2xl text-text leading-tight">
                  {product.name}
                </h3>

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

                <p className="md:hidden font-body text-xs text-text-muted mt-1">
                  Tap to view
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
