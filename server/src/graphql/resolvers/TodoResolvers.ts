import { Project } from '../../entity/Project'
import { TodoResolvers as TodoResolversType } from '../resolver-types'

export const TodoResolvers: TodoResolversType = {
  id: todo => todo.id,
  title: todo => todo.title,
  complete: todo => todo.complete,
  project: todo => Project.findOne(todo.project.id),
}
