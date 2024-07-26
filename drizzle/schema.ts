import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
    date,
    integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
 
export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name'),
    phone: text('phone'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.phone),
    };
  },
);

export const QuotesTable = pgTable(
    'quotes',
    {
      id: serial('id').primaryKey(),
      quote: text('quote'),
      likes: integer('likes'),
      createdAt: timestamp('createdAt').defaultNow().notNull(),
      showOn: date('showOn').defaultNow().notNull()
    }
);