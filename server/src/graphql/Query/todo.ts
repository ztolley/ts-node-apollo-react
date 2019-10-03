import { TodoEntity } from '../../entity/TodoEntity'
import { QueryTodoArgs, ResolverFn } from '../resolver-types'

export const todo: ResolverFn<TodoEntity, undefined, any, QueryTodoArgs> = (
  _,
  { id }
) => TodoEntity.findOne(id)
