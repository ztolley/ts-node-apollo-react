import { Photon, Todo } from '@generated/photon'
import { MutationUpdateTodoArgs, ResolverFn } from '../resolver-types'

const photon = new Photon()

export const updateTodo: ResolverFn<
  Todo,
  undefined,
  any,
  MutationUpdateTodoArgs
> = (_, args) =>
  photon.todos.update({
    where: { id: args.id },
    data: args,
  })
