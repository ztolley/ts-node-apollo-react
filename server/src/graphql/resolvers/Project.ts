import { Photon } from '@generated/photon'
import { ProjectResolvers } from '../resolver-types'

const photon = new Photon()

const Project: ProjectResolvers = {
  id: project => project.id,
  title: project => project.title,
  todos: project =>
    photon.projects.findOne({ where: { id: project.id } }).todos(),
}

export default Project
