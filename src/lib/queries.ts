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

export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    startingPrice,
    priceNote,
    sizeOptions,
    noticeRequired,
    "images": images[],
    "categoryTitle": category->title
  }
`;

export const aboutPageQuery = `
  *[_type == "aboutPage"][0] {
    founderName,
    founderPhoto,
    headline,
    storyText,
    "galleryImages": galleryImages[]
  }
`;

export const allFaqsQuery = `
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`;

export const allGalleryItemsQuery = `
  *[_type == "galleryItem"] | order(order asc) {
    _id,
    image,
    caption,
    occasionTags
  }
`;

export const deliveryInfoQuery = `
  *[_type == "siteSettings"][0] {
    deliveryAreas,
    deliveryNotice,
    deliveryFee,
    deliveryDays
  }
`;

export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt
  }
`;

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    excerpt,
    coverImage,
    body,
    publishedAt
  }
`;