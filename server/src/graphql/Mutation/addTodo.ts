import { Todo } from '../../entity/Todo'
import { MutationAddTodoArgs, ResolverFn } from '../resolver-types'

export const addTodo: ResolverFn<
  Todo,
  undefined,
  any,
  MutationAddTodoArgs
> = async (_, args) => Todo.create(args).save()
