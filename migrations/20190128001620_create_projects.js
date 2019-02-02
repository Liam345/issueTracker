exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("projects", table => {
      table.increments("id").primary();
      table.string("projectName");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTableIfExists("projects")]);
};
