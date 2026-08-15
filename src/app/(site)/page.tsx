import { Hero } from "../../components/sections/hero";
import { FeaturedCollection } from "../../components/sections/featured-collections";
import { client } from "../../lib/sanity";
import { siteSettingsQuery } from "../../lib/queries";
import { urlFor } from "../../lib/sanity-image";


export default async function Home() {
const settings = await client.fetch(siteSettingsQuery);

const heroImageUrl = settings?.heroImage
  ? urlFor(settings.heroImage).width(1200).fit("crop").crop("focalpoint").url()
  : undefined;

  return (
    <main className="min-h-screen bg-bg">
      <Hero heroImageUrl={heroImageUrl} />
      <FeaturedCollection />
    </main>
  );
}
