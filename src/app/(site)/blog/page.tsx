import Link from "next/link";
import { client } from "../../../lib/sanity";
import { allBlogPostsQuery } from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity-image";

export const metadata = {
  title: "Blog | Stephanie Cakes & Pastries",
  description:
    "Cake trends, baking tips, and stories from Stephanie Cakes & Pastries in Abuja.",
};

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  publishedAt: string;
};

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(allBlogPostsQuery);

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <p className="font-body text-sm tracking-widest uppercase text-accent mb-3">
            Blog
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text mb-4">
            Stories & Inspiration
          </h1>
          <p className="font-body text-text-secondary">
            Cake trends, tips, and behind-the-scenes moments from our kitchen.
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-product overflow-hidden bg-surface-secondary mb-4">
                  {post.coverImage && (
                    <img
                      src={urlFor(post.coverImage).width(700).fit("max").url()}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("en-NG", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="font-display text-2xl text-text mb-2 group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="font-body text-sm text-text-secondary line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="font-body text-text-secondary text-center py-20">
            No posts yet — check back soon.
          </p>
        )}
      </div>
    </main>
  );
}
