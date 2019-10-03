import { Todo } from '../../entity/Todo'
import { ProjectResolvers as ProjectResolversType } from '../resolver-types'

export const ProjectResolvers: ProjectResolversType = {
  id: project => project.id,
  title: project => project.title,
  todos: project => Todo.find({ where: { project: project.id } }),
}
