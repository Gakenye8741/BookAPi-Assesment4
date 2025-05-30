import db from "./db";
import { books } from "./schema";

async function seed() {
  try {
    await db.insert(books).values([
      {
        title: "BLOSSOMS OF THE SAVANNAH",
        author: "Ole Kaelo",
        year: 2000,
        genre: "Fiction",
      },
      {
        title: "The pearl",
        author: "coyotito",
        year: 1949,
        genre: "Fiction",
      },
     
    ]);

    console.log("✅ Books seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seed();
