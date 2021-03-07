const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    port:3306
  });

const checkConnection = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}


checkConnection()

// sequelize.close()