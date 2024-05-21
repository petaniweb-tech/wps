import { type SchemaTypeDefinition } from 'sanity'
import { bannerType } from './schemaTypes/banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerType],
}
