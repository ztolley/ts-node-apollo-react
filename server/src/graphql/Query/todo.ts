import { Todo } from '../../entity/Todo'
import { QueryTodoArgs, ResolverFn } from '../resolver-types'

export const todo: ResolverFn<Todo, undefined, any, QueryTodoArgs> = (
  _,
  { id }
) => Todo.findOne(id)
