import { Resolvers } from './resolver-types'

import * as Mutation from './Mutation'
import * as Query from './Query'
import { ProjectResolvers as Project } from './resolvers/ProjectResolvers'
import { TodoResolvers as Todo } from './resolvers/TodoResolvers'

export const resolvers: Resolvers = {
  Mutation,
  Project,
  Query,
  Todo,
}
