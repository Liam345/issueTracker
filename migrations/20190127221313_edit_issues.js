exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("issues", table => {
      table.datetime("createdOn");
      table.datetime("updatedOn");
      table.boolean("open");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("issues", table => {
      table.dropColumn("createdOn");
      table.dropColumn("updatedOn");
      table.dropColumn("open");
    })
  ]);
};
