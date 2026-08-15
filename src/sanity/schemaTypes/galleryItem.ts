import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
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
        ],
      },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
