import { TodoEntity } from '../../entity/TodoEntity'
import { MutationAddTodoArgs, ResolverFn } from '../resolver-types'

export const addTodo: ResolverFn<
  TodoEntity,
  undefined,
  any,
  MutationAddTodoArgs
> = async (_, args) => TodoEntity.create(args).save()
