# Prisma 8 (prisma-next) + Neon PostgreSQL
Contract Setup & Database Sync Guide

## Overview

This guide documents the working setup for Prisma 8's prisma-next Contract workflow with a Neon PostgreSQL database.

The workflow used here is: contract.prisma → contract emit → contract.json/contract.d.ts → db update → db sign.

## 1. Initialize Prisma for PostgreSQL

Run the Prisma Next ORM initialization:

```text
npx prisma@latest orm init --target postgres
```

Choose Prisma Schema Language (.prisma), then choose the schema location (for example, prisma/contract.prisma).

The initialization creates the Prisma Next configuration and installs the required packages such as @prisma/orm-postgres and dotenv.

## 2. Install the Prisma Next CLI dependencies

The setup may attempt to install prisma@next and @prisma/cli-engine. If the automatic installation fails because of npm dependency resolution, install them manually:

```text
npm install -D prisma@next --legacy-peer-deps
```

If @prisma/cli-engine is missing, install it with:

```text
npm install -D @prisma/cli-engine@next --legacy-peer-deps
```

## 3. Configure the contract schema

Example working Video model:

```text
// use prisma-next

model Video {
  id             String   @id @default(cuid())
  title          String
  description    String?
  publicId       String
  compressedSize String
  duration       String
  createdAt      DateTime @default(now())
  updatedAt      DateTime
}
```

Important troubleshooting note: in this setup, @updatedAt caused the PSL-to-SQL contract interpretation to fail. Removing @updatedAt allowed contract generation to succeed.

## 4. Configure the database client

Example db.ts:

```text
import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

export const db = postgres<Contract>({
  contractJson,
  url: process.env['DATABASE_URL']!,
});
```

Make sure DATABASE_URL points to the Neon PostgreSQL database.

## 5. Emit the contract

Run:

```text
npx prisma@latest contract emit
```

Or, if package.json contains the script "contract:emit": "prisma contract emit", run:

```text
npm run contract:emit
```

Successful output creates prisma/contract.json and prisma/contract.d.ts.

## 6. Create/update the schema in Neon

If db sign reports missing tables/columns, this means the live Neon schema does not yet match the generated contract.

Run:

```text
npx prisma@latest db update
```

This brings the Neon database schema up to the contract.

## 7. Sign/verify the database schema

After db update succeeds, run:

```text
npx prisma@latest db sign
```

A successful sign means the live Neon database satisfies the generated contract.

## 8. Complete workflow

Use this sequence whenever the contract schema changes:

```text
1. Edit prisma/contract.prisma
2. Emit the contract
3. Update the Neon database
4. Sign/verify the database
```

Commands:

```text
npm run contract:emit
npx prisma@latest db update
npx prisma@latest db sign
```

## Troubleshooting

CONTRACT.SOURCE_LOAD_FAILED / PSL to SQL contract interpretation failed: inspect recent schema changes. In this project, @updatedAt was the offending construct.

CLI.CONFIG_UNREADABLE / Cannot find module '@prisma/cli-engine': install @prisma/cli-engine, using @next if required by the Prisma Next release.

CONTRACT.SCHEMA_VERIFICATION_FAILED with missing database/public/video: the contract exists, but the Neon database has not been updated yet. Run db update, then db sign.

```text
npm ERESOLVE or dependency resolution problems: use npm install commands with --legacy-peer-deps when appropriate.
```

Do not rely on npx prisma validate or npx prisma -v for this Prisma Next CLI setup if the installed CLI reports those commands as unknown.

## Notes

This guide reflects the working Prisma 8 RC/prisma-next setup used in the project.

Avoid mixing unrelated traditional Prisma migration commands into this Contract workflow unless the project documentation specifically requires them.

The Neon SSL warning about sslmode=require being treated as verify-full is a warning, not the cause of the schema verification failure.
