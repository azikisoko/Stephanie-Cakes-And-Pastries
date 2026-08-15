import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: R => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true }, validation: R => R.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'seoKeywords', title: 'Target Keywords', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'Published Date', type: 'datetime', validation: R => R.required() }),
  ],
  preview: {
    select: { title: 'title', media: 'coverImage' }
  }
})