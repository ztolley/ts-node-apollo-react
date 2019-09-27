import { Photon, Project } from '@generated/photon'

import { QueryProjectArgs, ResolverFn } from '../resolver-types'

const photon = new Photon()

export const project: ResolverFn<Project, undefined, any, QueryProjectArgs> = (
  _,
  { id }
) =>
  photon.projects.findOne({
    where: { id },
  })
