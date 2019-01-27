exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("issues")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("issues").insert([
        {
          id: 1,
          title: "issue1",
          text: "issue1",
          createdBy: "issue1",
          assignedTo: "issue1",
          statusText: "issue1",
          createdOn: new Date(),
          updatedOn: new Date(),
          open: true
        },
        {
          id: 2,
          title: "issue2",
          text: "issue2",
          createdBy: "issue2",
          assignedTo: "issue2",
          statusText: "issue2",
          createdOn: new Date(),
          updatedOn: new Date(),
          open: true
        },
        {
          id: 3,
          title: "issue3",
          text: "issue3",
          createdBy: "issue3",
          assignedTo: "issue3",
          statusText: "issue3",
          createdOn: new Date(),
          updatedOn: new Date(),
          open: false
        }
      ]);
    });
};
