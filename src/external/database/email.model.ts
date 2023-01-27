import { Column, Model, Table } from 'sequelize-typescript'

@Table({ tableName: 'emails', timestamps: false })
export default class EmailModel extends Model {
  @Column({ primaryKey: true })
  id!: number;

  @Column
  sender!: string;

  @Column
  receiver!: string;

  @Column
  subject!: string;

  @Column
  content!: string;
}