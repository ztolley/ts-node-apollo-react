import { Photon, Todo } from '@generated/photon'

import { ResolverFn } from '../resolver-types'

const photon = new Photon()

export const todos: ResolverFn<Todo[], undefined, any, undefined> = () =>
  photon.todos.findMany()
