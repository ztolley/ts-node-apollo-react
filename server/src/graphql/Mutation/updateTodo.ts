import { MutationUpdateTodoArgs, ResolverFn } from '../resolver-types'

import { Todo } from '../../entity/Todo'

export const updateTodo: ResolverFn<
  Todo,
  undefined,
  any,
  MutationUpdateTodoArgs
> = async (_, { id, ...args }) => {
  Todo.update(id, args)
  return Todo.findOne(id)
}
