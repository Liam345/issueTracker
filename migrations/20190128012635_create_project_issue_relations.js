exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("issues", table => {
      table
        .integer("projectId")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("SET NULL");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("issues", table => {
      table.dropColumn("projectId");
    })
  ]);
};
