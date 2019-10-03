import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity('todo')
export class TodoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column({ default: false })
  complete: boolean

  @Column({ nullable: true })
  projectId!: string
}
