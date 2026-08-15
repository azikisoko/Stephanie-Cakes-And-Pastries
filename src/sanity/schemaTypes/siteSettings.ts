import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
    }),
    defineField({
      name: "deliveryAreas",
      title: "Delivery Areas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "deliveryNotice",
      title: "Delivery Notice Info",
      type: "text",
    }),
    defineField({
      name: "announcementBanner",
      title: "Announcement Banner Text",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL (future use)",
      type: "url",
    }),
  ],
});
