// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from '@vercel/postgres';
// import {
//   pgTable,
//   serial,
//   text,
//   timestamp,
//   uniqueIndex,
// } from 'drizzle-orm/pg-core';
 
// export const UsersTable = pgTable(
//   'users',
//   {
//     id: serial('id').primaryKey(),
//     name: text('name'),
//     phoneNumber: text('phoneNumber'),
//     createdAt: timestamp('createdAt').defaultNow().notNull(),
//   },
//   (users) => {
//     return {
//       uniqueIdx: uniqueIndex('unique_idx').on(users.phoneNumber),
//     };
//   },
// );

// // Connect to Vercel Postgres
// export const db = drizzle(sql)