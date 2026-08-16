import { client } from "../../../../lib/sanity";
import { productBySlugQuery } from "../../../../lib/queries";
import { ProductDetail } from "../../../../components/product/product-detail";
import { notFound } from "next/navigation";

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
