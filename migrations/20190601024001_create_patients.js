exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', (patientTable) => {
    patientTable.increments();
    patientTable.string('FNAME').notNullable();
    patientTable.string('LNAME').notNullable();
    patientTable
      .string('MRN')
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient');
};
