import { type SchemaTypeDefinition } from 'sanity'
import { bannerType } from './schemaTypes/banner'
import { galleryType } from './schemaTypes/gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerType, galleryType],
}
