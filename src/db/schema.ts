import { pgTable, uuid, boolean, text, unique, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date"}),
  image: text("image"),
  createdAt: timestamp("created_at", { mode: "date"}).default(sql `CURRENT_TIMESTAMP`),
  onboarded: boolean("onbarded").default(false),
 }, (table) => [
  unique("user_email_key").on(table.email),
 ]
)