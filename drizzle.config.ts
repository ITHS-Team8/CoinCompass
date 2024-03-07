import type { Config } from "drizzle-kit";

export default {
    schema: "src/data/schema.ts",
    out: "drizzle/",
    driver: "better-sqlite",
    dbCredentials: {
        url: "src/data/database.sqlite3"
    },
} satisfies Config;