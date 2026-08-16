import { client } from "../lib/sanity";
import { allBlogPostsQuery, allProductsQuery } from "../lib/queries";
import type { MetadataRoute } from "next";

const baseUrl = "https://stephaniecakes.com"; // update once domain is live

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, products] = await Promise.all([
    client.fetch(allBlogPostsQuery),
    client.fetch(allProductsQuery),
  ]);

  const staticRoutes = [
    "",
    "/menu",
    "/gallery",
    "/about",
    "/delivery",
    "/faq",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((post: { slug: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product: { slug: string }) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes, ...productRoutes];
}
