import { TodoEntity } from '../../entity/TodoEntity'
import { ResolverFn } from '../resolver-types'

export const todos: ResolverFn<TodoEntity[], undefined, any, undefined> = () =>
  TodoEntity.find()
