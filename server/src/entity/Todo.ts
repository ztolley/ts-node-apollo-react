import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm'

import { Project } from './Project'

@Entity('todo')
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column({ default: false })
  complete: boolean

  @ManyToOne(type => Project, project => project.todos)
  project!: Project
}
