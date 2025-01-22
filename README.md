<p align="center">
    <img src="/src/app/opengraph-image.jpg" alt="CardsFlash Logo">
</p>

# 🃏 CardsFlash for Devs

CardsFlash is a modern flashcard application designed specifically for developers and tech enthusiasts. Enhance your programming knowledge and coding skills with customizable flashcards that cover various programming languages, frameworks, and concepts.

---

## 🔬 Under the Hood

This app is built with:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle](https://orm.drizzle.team/)
- [Turso](https://turso.tech/)
- [Zustand](https://zustand-demo.pmnd.rs/)

---

## 🚀 Getting Started

Feel free to use this project as a template for your own cards.

### Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/DmelladoH/flash-cards-dev.git
cd flash-cards-dev
pnpm install
pnpm run dev
```

### Set Up the Database

This project uses Turso as the database. To set it up:

1. [Sign up for Turso](https://turso.tech/) if you don’t already have an account.
2. Install the Turso CLI:
   ```sh
   brew install turso
   ```
3. Authenticate with your Turso account:
   ```sh
   turso auth login
   ```
4. Create a new database:
   ```sh
   turso db create cardsflash
   ```
5. Connect the database to your project. Update the `.env` file with the database connection string:
   ```env
   TURSO_URL=<your-database-url>
   TURSO_AUTH=<your-database-token>
   ```
6. Run the migrations to set up the schema:
   ```sh
   pnpm drizzle sync
   ```

Follow: [drizzle guide](https://orm.drizzle.team/docs/tutorials/drizzle-with-turso)

### Usage

Start the development server:

```sh
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🤝 Contribute

Feel free to contribute to CardsFlash! Here’s how you can help:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Commit your changes with a clear and descriptive message.
3. Push your branch to your fork and submit a pull request.

If you have ideas for new flashcards, feel free to create an issue or submit a pull request with the content.
