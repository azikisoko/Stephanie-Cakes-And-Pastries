import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (R) => R.required(),
    }),
    defineField({
      name: "occasionTags",
      title: "Occasion Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "Birthdays",
          "Weddings",
          "Anniversaries",
          "Baby Showers",
          "Graduations",
          "Corporate Events",
          "Just Because",
        ],
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (R) => R.min(1),
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price (₦)",
      type: "number",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "priceNote",
      title: "Price Note",
      type: "string",
      initialValue: "Starting from",
    }),
    defineField({
      name: "sizeOptions",
      title: "Size / Variant Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "noticeRequired",
      title: "Notice Required",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "available",
      title: "Currently Available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", media: "images.0", subtitle: "category.title" },
  },
});
