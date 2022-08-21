import User from './users'
export * from './sequelize';

const db = {User};

export type dbType = typeof db;