import { client } from "../../../../lib/sanity";
import { blogPostBySlugQuery } from "../../../../lib/queries";
import { urlFor } from "../../../../lib/sanity-image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) return {};

  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : "/og-default.jpg";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <article className="max-w-2xl mx-auto px-5 md:px-10">
        <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-3 text-center">
          {new Date(post.publishedAt).toLocaleDateString("en-NG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="font-display text-3xl md:text-5xl text-text mb-8 text-center">
          {post.title}
        </h1>

        {post.coverImage && (
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-surface-secondary mb-10">
            <img
              src={urlFor(post.coverImage).width(1200).fit("max").url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose-custom">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  );
}