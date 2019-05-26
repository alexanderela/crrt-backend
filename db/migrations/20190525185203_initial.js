
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
  		table.text('gender');
  		table.decimal('usualWeight');
  		table.text('historyOfPresentIllness');
  		table.text('vitalSigns');
  		table.text('medications');
  		table.text('imaging');
  		table.text('physicalExam');
  		table.timestamps(true, true);
  	})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('cases')
  ]);
};
