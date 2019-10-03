import { ProjectEntity } from '../../entity/ProjectEntity'
import { MutationUpdateProjectArgs, ResolverFn } from '../resolver-types'

export const updateProject: ResolverFn<
  ProjectEntity,
  undefined,
  any,
  MutationUpdateProjectArgs
> = async (_, { id, ...args }) => {
  ProjectEntity.update(id, args)
  return ProjectEntity.findOne(id)
}
