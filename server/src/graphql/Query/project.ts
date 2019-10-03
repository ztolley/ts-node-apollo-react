import { ProjectEntity } from '../../entity/ProjectEntity'
import { QueryProjectArgs, ResolverFn } from '../resolver-types'

export const project: ResolverFn<
  ProjectEntity,
  undefined,
  any,
  QueryProjectArgs
> = (_, { id }) => ProjectEntity.findOne(id)
