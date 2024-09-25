import path, { dirname } from "path";
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from ".";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  console.log("Migrating database...");
  await migrate(db, {
    migrationsFolder: path.join(__dirname, "./migrations"),
  });
  console.log("Database migrated successfully!");
})();
