import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  repositoryMode: true,
  database: 'sequelize-1',
  dialect: 'postgres',
  username: 'postgres',
  password: 'netpacs123',
  host: 'localhost',
  port: 5432
})

export { sequelize }