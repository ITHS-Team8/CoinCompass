import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { users } from '../data/schema';

const sqlite = new Database('src/data/database.sqlite3');
const db = drizzle(sqlite);

const result = await db.select().from(users);