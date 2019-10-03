import { Project } from '../../entity/Project'
import { ResolverFn } from '../resolver-types'

export const projects: ResolverFn<Project[], undefined, any, undefined> = () =>
  Project.find()
