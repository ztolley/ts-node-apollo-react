import { Photon, Project } from '@generated/photon'
import { MutationUpdateProjectArgs, ResolverFn } from '../resolver-types'

const photon = new Photon()

export const updateProject: ResolverFn<
  Project,
  undefined,
  any,
  MutationUpdateProjectArgs
> = (_, args) =>
  photon.projects.update({
    where: { id: args.id },
    data: args,
  })
