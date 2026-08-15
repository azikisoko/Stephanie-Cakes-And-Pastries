export const featuredProductsQuery = `
  *[_type == "product" && featured == true && available == true] | order(order asc) [0...3] {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    startingPrice,
    priceNote,
    "image": images[0],
    "categoryTitle": category->title
  }
`;
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    heroImage {
      asset->{ url },
      hotspot,
      crop
    }
  }
`;
