### Viscord

This is a Discord clone created just for routine practice.

### Tech stack

1. Next.js
1. React
1. Prisma
1. TailwindCss
1. MySQL
1. Socket.io

## Getting Started

1. Clone repo
1. Make a copy of .env.example into a private .env file
1. Setup db for prisma + planetscale
1. Setup external services like clerk, uploadthing, livekit
1. Add all the secret keys from previous setups to the env file
1. Run the following db migrations:
   ```
   npx prisma generate
   npx prisma db push
   ```
1. Run installation command
   ```
   npm run install
   ```
1. Run dev server start command
   ```
   npm run dev
   ```
