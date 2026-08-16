import { redirect } from "next/navigation";

export default async function CategoryRedirect({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  await params;
  redirect("/menu");
}
