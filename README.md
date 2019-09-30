# Typescript - Apollo GraphQL client/server - React

A boilerplate application written entirely in Typescript

--The project it designed to use NPM cli for package management--

## Components

### Server

- [Typescript v3.6.x](https://www.typescriptlang.org/)
- [Node JS v10.x.x](https://nodejs.org/en/)
- [Apollo GraphQL server](https://www.apollographql.com/docs/apollo-server/)
- [Postgresql](https://www.postgresql.org/)
- [Prisma 2](https://photonjs.prisma.io)

### Client

- [Typescript v3.6.x](https://www.typescriptlang.org/)
- [React v16.9.x](https://reactjs.org/)
- [Apollo Graphql client](https://www.apollographql.com/docs/react/)
- [Formik v1.x](https://jaredpalmer.com/formik/)
- [Material UI](https://material-ui.com/)

### Tools

- [Graphql code generator](https://graphql-code-generator.com/)

## Developer info

The boilerplate application is written a a complete self contained web application that provides a simple Todo list.

### Server

The server provides a graphql client using the apollo library to handle mapping resolvers. A script in the tools folder generates the Typescript types for resolvers based on the Graphql schema.

Prisma 2 is used to manage generating and applying database migrations and for automatically generating the DAO layer in Typescript baed on the database schema.

#### NPM Scripts

- build - Compiles Typescript into js compatible with Node js
- develop - Runs the server in watch mode to automatically restart when changes are mde
- lint - Check the code is tidy
- start - Runs the compiled copy of the code
- db:gen - Runs `Prisma2 list save`. This analysis the databae model file and if it has changed sinse the last migration it claculates the migration needed to synchronise the database to the design
- db:migrate - Applies the database migrations to the database
- db:dao - Generates Typescript code to act as a data access layer, making it easy to write code to access the database. The result it stored in node_modules in `@generated/photon` so needs to be run before starting work on the project or when the node_modules folder is cleared.

## Editor Tools

- Prettier
- ESLint
- Editor config
