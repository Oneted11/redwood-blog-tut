# Migration `20200819111022-migration`

This migration has been generated by Oneted11 at 8/19/2020, 2:10:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Post" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"title" TEXT NOT NULL,
"body" TEXT NOT NULL,
"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200819111022-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+model Post {
+  id        Int      @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
```


