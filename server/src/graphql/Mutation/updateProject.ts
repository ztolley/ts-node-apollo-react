import { MutationUpdateProjectArgs, ResolverFn } from '../resolver-types'
import { Project } from '../../entity/Project'

export const updateProject: ResolverFn<
  Project,
  undefined,
  any,
  MutationUpdateProjectArgs
> = async (_, { id, ...args }) => {
  Project.update(id, args)
  return Project.findOne(id)
}
