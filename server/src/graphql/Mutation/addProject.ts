import { Photon, Project } from '@generated/photon'

import { MutationAddProjectArgs, ResolverFn } from '../resolver-types'

const photon = new Photon()

export const addProject: ResolverFn<
  Project,
  undefined,
  any,
  MutationAddProjectArgs
> = (_, args) =>
  photon.projects.create({
    data: args,
  })
