import { Photon, Todo } from '@generated/photon'

import { QueryTodoArgs, ResolverFn } from '../resolver-types'

const photon = new Photon()

export const todo: ResolverFn<Todo, undefined, any, QueryTodoArgs> = (
  _,
  { id }
) =>
  photon.todos.findOne({
    where: { id },
  })
