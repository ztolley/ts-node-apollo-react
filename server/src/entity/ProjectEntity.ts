import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity('project')
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string
}
