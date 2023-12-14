import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.POSTGRES_DB_NAME || '',
  username: process.env.POSTGRES_DB_USERNAME || '',
  password: process.env.POSTGRES_DB_PASSWORD || '',
  host: process.env.POSTGRES_DB_HOST || '',
  port: parseInt(process.env.POSTGRES_DB_PORT || '0'),
  models: [__dirname + '/models'], // Specify your models folder
  logging: true, // Disable logging (you can enable it for debugging)
});

export default sequelize;
