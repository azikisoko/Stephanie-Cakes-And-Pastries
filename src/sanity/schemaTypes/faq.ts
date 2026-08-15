import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Group",
      type: "string",
      options: {
        list: ["Ordering", "Delivery", "Payment", "Custom Orders", "General"],
      },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
