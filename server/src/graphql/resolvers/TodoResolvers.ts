import { ProjectEntity } from '../../entity/ProjectEntity'
import { TodoEntity } from '../../entity/TodoEntity'
import { TodoResolvers as TodoResolversType } from '../resolver-types'

export const TodoResolvers: TodoResolversType<any, TodoEntity> = {
  id: todo => todo.id,
  title: todo => todo.title,
  complete: todo => todo.complete,
  project: todo => ProjectEntity.findOne(todo.projectId),
}
