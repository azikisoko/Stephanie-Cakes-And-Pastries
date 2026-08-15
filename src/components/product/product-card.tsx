import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  slug: string;
  name: string;
  shortDescription?: string;
  startingPrice: number;
  priceNote?: string;
  imageUrl?: string;
  size?: "large" | "regular";
};

export function ProductCard({
  slug,
  name,
  shortDescription,
  startingPrice,
  priceNote = "Starting from",
  imageUrl,
  size = "regular",
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${slug}`}
      className="group block rounded-product overflow-hidden bg-surface border border-border hover:border-border-strong transition-colors duration-300"
    >
      <div
        className={`relative overflow-hidden ${
          size === "large" ? "aspect-[3/4]" : "aspect-[3/4]"
        }`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-surface-secondary flex items-center justify-center">
            <span className="font-body text-xs text-text-muted">
              No image yet
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl text-text mb-1">{name}</h3>
        {shortDescription && (
          <p className="font-body text-sm text-text-secondary mb-3 line-clamp-2">
            {shortDescription}
          </p>
        )}
        <div className="flex items-center justify-between">
          <p className="font-body text-sm text-text">
            <span className="text-text-muted">{priceNote} </span>
            <span className="font-semibold">
              ₦{startingPrice.toLocaleString()}
            </span>
          </p>
          <span className="font-body text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform duration-300 inline-block">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
