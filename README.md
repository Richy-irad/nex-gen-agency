---
    title: NexGen Agency
    description: 'NexGen Agency is a A social Media management Agency.'
---

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. First, clone the repository from Github [NexGen](https://github.com/Richy-irad/nex-gen-agency).

2. Then install dependencies by running

```bash
npm install
# or
yarn install
```

3. And you can then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Content Translation

The website needs to be available in more than one language. To start, it is available in English and French. English is the default language used.

Here are the steps followed to achieve this:

1. a [`middleware.ts`](/src/middleware.ts) file was created. It performs the checking of which locale is being used and setting it into the `route` for access throughout application, where it is needed.
2. All routes are nested inside the [`app/[lang]`](/src/app/[lang]/) directory, except for `studio/`.
3. Content that do not change, e.g. content for the home page, has been placed in the [`translations`](/src/lib/translations/) directory.
4. Each directory in [`translations`](/src/lib/translations/), then contains directories to translations of different content, and each directory contains content both in english and in french, stored in `.json` files. Each directory also contains an `index.ts` file that contains a helper function prefixed with `getTranlated...` and then content, which performs the selection of appropriate content based on the language being used in application.

### Sanity studio

The `projects` route is populated with content managed in **Sanity Studio**. The studio is embedded and can be accessed through [localhost:3000/studio](http://localhost:3000/studio) while in local development or [nexgenagency.ca/studio](https://nexgenagency.ca/studio) for the live application.

The [`studio/`](/src/app/studio/) route is excluded from being changed by the `middleware`, in the `matcher` config of `config` object in [`middleware.ts`](/src/middleware.ts).

#### Schemas

All the Sanity schemas can be accessed in the [`Schemas`](/src/sanity/schemaTypes/). Each file in this directory contains schemas for the data store in the application.

#### Queries

The GROQ queries used throughout the application are located in the [`queries.ts`](/src/sanity/lib/queries.ts) file.

#### Sanity Settings

Sanity settings can be accessed in [`sanity.config.ts`](/sanity.config.ts) and [`sanity.cli.ts`](/sanity.cli.ts).

Other settings for Sanity can be found in the [`env.ts`](/src/sanity/env.ts) file.

#### Content Revalidation

### Optimizations

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployment

The project is hosted on [Vercel Platform](https://vercel.com/).

Also the project uses [**Cloudinary**](https://cloudinary.com/) to manage assets such as images and videos, especially for the projects created in **Studio**.

All necessary `secrets` for deployment should be placed in enviroment variables in the settings path.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## More resources

The following resources will be of tremendous help to understanding what happened during the development process of this project:

- [TailwindCSS](https://www.tailwindcss.com)
- [Sanity Studio SchemaTypes Reference](https://www.sanity.io/docs/schema-types)
- [GROQ Query Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [GROQ Language Reference](https://www.sanity.io/docs/groq-reference)
- [Next Cloudinary Reference](https://next.cloudinary.dev/)
- [Sanity cloudinary plugin](https://www.sanity.io/plugins/sanity-plugin-cloudinary)
- [Sanity internationalized array plugin](https://www.sanity.io/plugins/internationalized-array)
- [Next.js Internationalization](https://nextjs.org/docs/pages/building-your-application/routing/internationalization)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
