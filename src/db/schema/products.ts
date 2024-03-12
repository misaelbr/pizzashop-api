import { createId } from '@paralleldrive/cuid2'
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  name: text('name').notNull(),
  description: text('description'),
  priceInCents: integer('price_in_cents').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
