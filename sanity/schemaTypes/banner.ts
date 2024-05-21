import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
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
      name: "description",
      type: "string",
    }),
    defineField({
      name: "backgroundColor",
      type: "color",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "video",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    }),
  ],
});
