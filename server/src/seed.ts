import { Photon } from '@generated/photon'

const photon = new Photon()

export const seed = async () => {
  const projects = await photon.projects.count()
  if (projects > 0) {
    return
  }

  console.log('Seeding data')

  try {
    await photon.projects.create({
      data: {
        title: 'Project 1',
        todos: {
          create: [
            {
              title: 'Subscribe to GraphQL Weekly for community news',
              complete: true,
            },
            {
              title: 'Follow Prisma on Twitter',
              complete: false,
            },
          ],
        },
      },
    })

    console.log('Seed done')
  } catch (error) {
    console.error(error)
  }
}
