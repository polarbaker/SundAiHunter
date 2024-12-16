# FUTURE SITE TEMPLATE

# Bounty Hunting Platform for Hackers of [Sundai.Club](https://Sundai.Club)

# Start the database
## Getting Started

### 1. Start the Database

First, start the PostgreSQL database using Docker:

```bash
# Start the database
docker-compose up -d
# setup db schema
pnpm migrate
# seed db 
pnpm seed 

# To stop the database
docker-compose down

# To view database logs
docker-compose logs -f postgres
```

The database will be available at:

- Host: localhost
- Port: 5432
- User: postgres
- Password: postgres
- Database: sundai_db

### 2. Run the Development Server

```bash
# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev

# Seed the database (optional)
npx prisma db seed

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
