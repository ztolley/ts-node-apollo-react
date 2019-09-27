import { Photon, Todo } from '@generated/photon'
import { MutationAddTodoArgs, ResolverFn } from '../resolver-types'

const photon = new Photon()

export const addTodo: ResolverFn<Todo, undefined, any, MutationAddTodoArgs> = (
  _,
  args
) =>
  photon.todos.create({
    data: {
      ...args,
      complete: false,
    },
  })
