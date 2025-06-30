import { pgTable, foreignKey, uuid, boolean, primaryKey, integer, text, unique, timestamp, varchar, serial } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';


// export const user = pgTable("user", {
//   id: uuid("id").defaultRandom().primaryKey().notNull(),
//   name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   emailVerified: timestamp("email_verified", { mode: "date"}),
//   image: text("image"),
//   createdAt: timestamp("created_at", { mode: "date"}).default(sql `CURRENT_TIMESTAMP`),
//   onboarded: boolean("onbarded").default(false),
//  }, (table) => [
//   unique("user_email_key").on(table.email),
//  ]
// );
// This is for OAuth with Google...but maybe I don't need to make it so complicated? 

export const user = pgTable("user", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text(),
	email: text().notNull(),
	emailVerified: timestamp("email_verified", { mode: 'string' }),
	image: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	onboarded: boolean().default(false),
}, (table) => [
	unique("users_email_key").on(table.email),
]);

export const account = pgTable("account", {
	id: serial().primaryKey().notNull(),
	userId: uuid().notNull(),
	type: text().notNull(),
	provider: text().notNull(),
	providerAccountId: text().notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text(),
	idToken: text("id_token"),
	sessionState: text("session_state"),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "account_userId_user_id_fk"
		}).onDelete("cascade"),
	unique("accounts_provider_provider_account_id_key").on(table.provider, table.providerAccountId),
]);

export const session = pgTable("session", {
	sessionToken: text().primaryKey().notNull(),
	userId: uuid().notNull(),
	expires: timestamp({ mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "session_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(), 
  title: varchar("title", { length: 500 }).notNull(), 
  slug: varchar("slug", { length: 500 }).notNull().unique(), 
  content: text("content").notNull(), 
  author: varchar("author", { length: 100 }), 
  status: varchar("status", { length: 20 }).default("draft"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}); 