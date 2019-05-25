
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('cases', function(table) {
  		table.increments('id').primary();
  		table.integer('sodiumProductionRate');
  		table.decimal('potassiumProductionRate');
  		table.integer('chlorideProductionRate');
  		table.integer('bicarbonateProductionRate');
  		table.integer('BUNProductionRate');
  		table.integer('creatinineProductionRate');
  		table.integer('calciumProductionRate');
  		table.integer('filtrationFractionStarting');
  		table.string('gender');
  		table.decimal('usualWeight');
  		table.string('historyOfPresentIllness');
  		table.string('vitalSigns');
  		table.string('medications');
  		table.string('imaging');
  		table.string('physicalExam');
  		table.timestamps(true, true);
  	})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('cases')
  ]);
};
