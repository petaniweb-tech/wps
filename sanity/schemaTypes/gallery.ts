import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "number",
      type: "number",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "englishTitle",
      type: "string",
    }),
    defineField({
      name: "year",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
