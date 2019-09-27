import * as Mutation from './Mutation'
import * as Query from './Query'
import Project from './resolvers/Project'
import Todo from './resolvers/Todo'

import { Resolvers } from './resolver-types'

export const resolvers: Resolvers = {
  Mutation,
  Project,
  Query,
  Todo,
}
