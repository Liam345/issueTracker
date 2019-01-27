require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "issue_tracker",
      user: "demo",
      password: "password"
    },
    migrations: {
      directory: __dirname + "/migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
