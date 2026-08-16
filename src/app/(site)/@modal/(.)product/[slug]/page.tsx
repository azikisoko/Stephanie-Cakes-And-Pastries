import { client } from "../../../../../lib/sanity";
import { productBySlugQuery } from "../../../../../lib/queries";
import { ProductDetail } from "../../../../../components/product/product-detail";
import { Modal } from "../../../../../components/ui/modal";
import { notFound } from "next/navigation";

export default async function ProductModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await client.fetch(productBySlugQuery, { slug });

  if (!product) notFound();

  return (
    <Modal>
      <ProductDetail product={product} />
    </Modal>
  );
}
