import { Project } from '../../entity/Project'
import { MutationAddProjectArgs, ResolverFn } from '../resolver-types'

export const addProject: ResolverFn<
  Project,
  undefined,
  any,
  MutationAddProjectArgs
> = (_, args) => Project.create(args).save()
