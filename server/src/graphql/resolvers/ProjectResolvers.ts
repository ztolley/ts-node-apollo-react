import { TodoEntity } from '../../entity/TodoEntity'
import { ProjectResolvers as ProjectResolversType } from '../resolver-types'

export const ProjectResolvers: ProjectResolversType<any, TodoEntity> = {
  id: project => project.id,
  title: project => project.title,
  todos: project => TodoEntity.find({ where: { projectId: project.id } }),
}
