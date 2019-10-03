import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { importSchema } from 'graphql-import'
import { createConnection } from 'typeorm'

import { resolvers } from './graphql'

const typeDefs = importSchema('./src/graphql/schema.graphql')
const port = process.env.SERVER_PORT || 5000

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = express()

app.use('/', express.static('public'))
server.applyMiddleware({
  app,
  path: '/api',
})

createConnection().then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`))
})
