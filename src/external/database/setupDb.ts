import { Sequelize } from 'sequelize-typescript'
import EmailModel from './email.model'

export async function setupDb() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  })

  sequelize.addModels([
    EmailModel,
  ])
  await sequelize.sync()

  return sequelize
}