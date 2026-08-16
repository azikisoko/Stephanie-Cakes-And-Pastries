export const featuredProductsQuery = `
  *[_type == "product" && featured == true && available == true] | order(order asc) [0...20] {
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
export const allCategoriesQuery = `
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    "slug": slug.current
  }
`;

export const allProductsQuery = `
  *[_type == "product" && available == true] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    startingPrice,
    priceNote,
    "image": images[0],
    "categorySlug": category->slug.current,
    "categoryTitle": category->title
  }
`;
