// Update with your config settings.

module.exports = {
//configuration for the development enviornment
  development: {
    client: 'sqlite3',//database driver
    connection: {
      filename: './database/food.db3' //which file i am using
    },
    useNullAsDefault: true, //required for sqlite only
  },
//configuration for the production enviornment
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
