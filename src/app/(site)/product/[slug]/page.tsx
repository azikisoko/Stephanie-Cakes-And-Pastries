import { client } from "../../../../lib/sanity";
import { productBySlugQuery } from "../../../../lib/queries";
import { ProductDetail } from "../../../../components/product/product-detail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { urlFor } from "../../../../lib/sanity-image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch(productBySlugQuery, { slug });

  if (!product) return {};

  const imageUrl = product.image
    ? urlFor(product.image).width(1200).height(630).fit("crop").url()
    : "/og-default.jpg";

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await client.fetch(productBySlugQuery, { slug });

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <ProductDetail product={product} />
      </div>
    </main>
  );
}
