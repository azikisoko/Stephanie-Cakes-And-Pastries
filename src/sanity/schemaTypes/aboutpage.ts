import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "founderName",
      title: "Founder Name",
      type: "string",
      initialValue: "Stephanie",
    }),
    defineField({
      name: "founderPhoto",
      title: "Founder Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      initialValue: "More than cake.",
    }),
    defineField({
      name: "storyText",
      title: "Story",
      type: "array",
      of: [{ type: "block" }],
      description:
        "The main founder/brand story — supports rich text formatting",
    }),
    defineField({
      name: "galleryImages",
      title: "Supporting Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Kitchen shots, process photos, ingredients, etc.",
    }),
  ],
});
