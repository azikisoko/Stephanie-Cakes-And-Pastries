import { client } from "../../../lib/sanity";
import { allCategoriesQuery, allProductsQuery } from "../../../lib/queries";
import { MenuGrid } from "../../../components/menu/menu-grid";
import Link from "next/link";

export const metadata = {
  title: "Menu | Stephanie Cakes & Pastries",
  description:
    "Explore our full menu of handcrafted cakes, pastries, cupcakes and small chops — made fresh in Abuja.",
};

export default async function MenuPage() {
  const [products, categories] = await Promise.all([
    client.fetch(allProductsQuery),
    client.fetch(allCategoriesQuery),
  ]);

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Page Header */}
        <div className="mb-10 md:mb-14 text-center">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            Our Menu
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text">
            Made with care,
            <br />
            served with love.
          </h1>
        </div>

        {/* Filterable Grid */}
        <MenuGrid products={products} categories={categories} />

        {/* Custom Order Teaser */}
        <div className="mt-20 md:mt-32 bg-surface-secondary rounded-lg p-8 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-text mb-4">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="font-body text-text-secondary max-w-md mx-auto mb-8">
            Let&apos;s create something custom, made specifically for your
            occasion.
          </p>
          <Link
            href="/custom-order"
            className="inline-flex bg-accent text-white rounded-pill px-8 h-12 items-center justify-center font-body text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
          >
            Start a Custom Order
          </Link>
        </div>
      </div>
    </main>
  );
}
