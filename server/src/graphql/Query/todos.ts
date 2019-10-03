import { Todo } from '../../entity/Todo'
import { ResolverFn } from '../resolver-types'

export const todos: ResolverFn<Todo[], undefined, any, undefined> = () =>
  Todo.find()
