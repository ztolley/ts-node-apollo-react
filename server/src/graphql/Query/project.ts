import { Project } from '../../entity/Project'
import { QueryProjectArgs, ResolverFn } from '../resolver-types'

export const project: ResolverFn<Project, undefined, any, QueryProjectArgs> = (
  _,
  { id }
) => Project.findOne(id)
