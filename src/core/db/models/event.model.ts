import { Model, Table, Column, DataType } from 'sequelize-typescript';

export interface IEvent {
  id?: number;
  name: string;
  description?: string;
  startDateTime: Date;
  endDateTime: Date;
  address: string;
  guests: string[];
  notification: string;
  reminder?: string;
  attachments: string[];
}

@Table({ tableName: 'event', timestamps: true })
export default class Event extends Model<IEvent, IEvent> implements IEvent {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id?: number;

  @Column({
    type: DataType.STRING(200),
  })
  name!: string;

  @Column({
    type: DataType.STRING(500),
  })
  description?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  startDateTime!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  endDateTime!: Date;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    defaultValue: '',
  })
  address!: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: [],
  })
  guests!: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'email',
  })
  notification!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  reminder?: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: [],
  })
  attachments!: string[];
}
