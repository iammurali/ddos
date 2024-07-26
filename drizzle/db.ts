import "@/drizzle/envConfig";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { eq } from "drizzle-orm";

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
  return db.query.UsersTable.findMany();
};

schema.QuotesTable.showOn, new Date().toISOString();
export const getQuotes = async () => {
  // return db.query.QuotesTable.findFirst({
  //     where: (users, { eq }) => eq(schema.QuotesTable.showOn, new Date().toISOString()),
  //   });

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Query for today's quote
  const todayQuote = await db.query.QuotesTable.findFirst({
    where: (quotes, { eq }) => eq(quotes.showOn, today),
  });

  let quote;
  if (todayQuote) {
    quote = todayQuote;
  } else {
    // Query for the most recent quote before today
    const recentQuote = await db.query.QuotesTable.findFirst({
      where: (quotes, { lt }) => lt(quotes.showOn, today),
      orderBy: (quotes, { desc }) => desc(quotes.showOn), // Order by date in descending order
    });
    quote = recentQuote;
  }

  return quote;
};

export const addNewUser = async (data: { name: string; phone: string }) => {
  let existingUser = await db.query.UsersTable.findFirst({
    where: (users, { eq }) => eq(users.phone, data.phone),
  });

  if (existingUser) {
    return "Good new! you have subscribed already.!";
  } else {
    return db.insert(schema.UsersTable).values({
        name: data.name,
        phone: data.phone
    });
  }
};

export const addNewQuote = async () => {
  return db.insert(schema.QuotesTable).values({
    likes: 100,
    quote:
      "Remember, every failure is just a step towards your next epic disaster.",
    showOn: new Date().toISOString(),
  });
};

export const addNewLike = async (quote: {
  id: number;
  createdAt: Date;
  quote: string | null;
  likes: number | null;
  showOn: string;
}) => {
  return db
    .update(schema.QuotesTable)
    .set({ likes: (quote?.likes || 0) + 1 })
    .where(eq(schema.QuotesTable.id, quote.id));
};
