import { Photon } from '@generated/photon'
import { TodoResolvers } from '../resolver-types'

const photon = new Photon()

const Todo: TodoResolvers = {
  id: todo => todo.id,
  title: todo => todo.title,
  complete: todo => todo.complete,
  project: todo => photon.todos.findOne({ where: { id: todo.id } }).project(),
}

export default Todo
