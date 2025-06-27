/*
  Warnings:

  - You are about to drop the column `descriptin` on the `Expenses` table. All the data in the column will be lost.
  - Added the required column `description` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "amount" TEXT NOT NULL
);
INSERT INTO "new_Expenses" ("amount", "id") SELECT "amount", "id" FROM "Expenses";
DROP TABLE "Expenses";
ALTER TABLE "new_Expenses" RENAME TO "Expenses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
