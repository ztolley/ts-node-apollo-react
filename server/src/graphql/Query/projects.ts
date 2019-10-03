import { ProjectEntity } from '../../entity/ProjectEntity'
import { ResolverFn } from '../resolver-types'

export const projects: ResolverFn<
  ProjectEntity[],
  undefined,
  any,
  undefined
> = () => ProjectEntity.find()
