import { ProjectEntity } from '../../entity/ProjectEntity'
import { MutationAddProjectArgs, ResolverFn } from '../resolver-types'

export const addProject: ResolverFn<
  ProjectEntity,
  undefined,
  any,
  MutationAddProjectArgs
> = (_, args) => ProjectEntity.create(args).save()
