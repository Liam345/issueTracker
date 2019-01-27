exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("issues", table => {
      table.increments("id").primary();
      table.string("title");
      table.string("text");
      table.string("createdBy");
      table.string("assignedTo");
      table.string("statusText");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTableIfExists("issues")]);
};
