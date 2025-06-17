# Baby Kitty Rescue Committee 2.0

A full-stack redesign of the [Baby Kitty Rescue](https://www.babykittyrescue.org/) nonprofit website. This application is being rebuilt from the ground up using modern web technologies like **Next.js**, **TypeScript**, **NextAuth.js**, **Drizzle ORM**, **PostgreSQL**, and **Neon**.

## Project Goals

- Migrate existing content from the legacy WordPress site to a faster, more flexible React-based application.
- Allow the site owner (a nonprofit director) to **log in as an administrator** to:
  - Add, edit, or remove adoptable cats
  - Post and manage blog content
  - Create announcements for volunteers and events
- Maintain essential features like:
  - Donation integration (via third-party widget)
  - Mailchimp newsletter signup
  - Static and dynamic pages for public visitors

## Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Database:** PostgreSQL (via [Neon](https://neon.tech/))
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Styling:** Tailwind CSS

## Getting Started (In progress...)

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/babykittyrescue2.0.git
cd babykittyrescue2.0
npm install
```

Run the project:

`npm run dev`
