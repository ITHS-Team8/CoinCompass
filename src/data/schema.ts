
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().unique(),
  username: text("username"),
  password: text("password"),
  email: text("email"),
  first_name: text("first_name"),
  last_name: text("last_name"),
  age: integer("age"),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
  modifedAt: text("modifedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const expenses = sqliteTable("expenses", {
  id: text("id").primaryKey().unique(),
  expenseName: text("expenseName"),
  expenseAmount: integer("expenseAmount"),
  expenseDescription: text("expenseDescription"),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
  modifedAt: text("modifedAt").default(sql`CURRENT_TIMESTAMP`),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type Expense = typeof expenses.$inferSelect;
export type InsertExpense = typeof expenses.$inferInsert;