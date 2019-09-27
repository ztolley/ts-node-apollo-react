import { Photon, Project } from '@generated/photon'

import { ResolverFn } from '../resolver-types'

const photon = new Photon()

export const projects: ResolverFn<Project[], undefined, any, undefined> = () =>
  photon.projects.findMany()
