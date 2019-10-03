import { MutationUpdateTodoArgs, ResolverFn } from '../resolver-types'

import { TodoEntity } from '../../entity/TodoEntity'

export const updateTodo: ResolverFn<
  TodoEntity,
  undefined,
  any,
  MutationUpdateTodoArgs
> = async (_, { id, ...args }) => {
  TodoEntity.update(id, args)
  return TodoEntity.findOne(id)
}
