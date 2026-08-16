"use client";

import { useState } from "react";
import Link from "next/link";
import { urlFor } from "../../lib/sanity-image";
import { WhatsAppIcon } from "../../components/icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImage = any;

type ProductDetailProps = {
  product: {
    name: string;
    fullDescription?: string;
    shortDescription?: string;
    startingPrice: number;
    priceNote?: string;
    sizeOptions?: string[];
    noticeRequired?: string;
    images?: SanityImage[];
    categoryTitle?: string;
  };
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images || [];

  const message = `Hi Stephanie! I'd like to order:\n\n🎂 ${product.name}\nStarting from ₦${product.startingPrice.toLocaleString()}\n\nCould you help me with pricing for my size/date?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const customMessage = `Hi Stephanie! I saw the "${product.name}" and I'd love something custom based on this — could we chat about designing my own version?`;
  const customWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Images */}
      <div>
        <div className="relative aspect-square rounded-product overflow-hidden bg-surface-secondary mb-3">
          {images[activeImage] && (
            <img
              src={urlFor(images[activeImage]).width(800).fit("max").url()}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors duration-200 ${
                  activeImage === i ? "border-accent" : "border-transparent"
                }`}
              >
                <img
                  src={urlFor(img).width(100).fit("crop").url()}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col">
        {product.categoryTitle && (
          <p className="font-body text-xs uppercase tracking-widest text-accent mb-2">
            {product.categoryTitle}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-4xl text-text mb-4">
          {product.name}
        </h1>
        {(product.fullDescription || product.shortDescription) && (
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            {product.fullDescription || product.shortDescription}
          </p>
        )}

        {product.sizeOptions && product.sizeOptions.length > 0 && (
          <div className="mb-6">
            <p className="font-body text-sm font-semibold text-text mb-2">
              Sizes
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizeOptions.map((size) => (
                <span
                  key={size}
                  className="font-body text-sm text-text-secondary border border-border rounded-pill px-4 py-1.5"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {product.noticeRequired && (
          <p className="font-body text-sm text-text-muted mb-6">
            Notice required: {product.noticeRequired}
          </p>
        )}

        <div className="mt-auto pt-6 border-t border-border">
          <p className="font-body text-text mb-4">
            <span className="text-text-muted">
              {product.priceNote || "Starting from"}{" "}
            </span>
            <span className="font-display text-2xl">
              ₦{product.startingPrice.toLocaleString()}
            </span>
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-white rounded-pill h-12 font-body text-sm font-semibold hover:bg-accent-hover transition-colors duration-200 mb-3"
          >
            <WhatsAppIcon size={18} />
            Order on WhatsApp
          </a>

          <a
            href={customWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-body text-sm text-text-secondary hover:text-accent transition-colors duration-200"
          >
            Need something different? Start a Custom Order →
          </a>
        </div>
      </div>
    </div>
  );
}
