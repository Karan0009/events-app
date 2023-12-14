import path from 'node:path';
import { Sequelize } from 'sequelize-typescript';

export default class Database {
  private static instance: Database | null = null;
  private sequelize: Sequelize | null;

  private constructor() {
    if (!this.sequelize) this.createDbConnection();
    this.connectToDatabase();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection() {
    if (!this.sequelize) throw new Error('no connection found');
    return this.sequelize;
  }

  private createDbConnection() {
    this.sequelize = new Sequelize(process.env.POSTGRES_DB_URI || '', {
      models: [path.join(__dirname, '/models/')], // Specify your models folder
      logging: console.log,
    });
  }

  private async connectToDatabase() {
    try {
      if (!this.sequelize) throw new Error('connection not found');
      //   await this.sequelize.sync();
      await this.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (err) {
      throw err;
    }
  }
}
