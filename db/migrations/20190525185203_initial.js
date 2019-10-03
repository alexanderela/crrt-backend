exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("cases", function(table) {
      table.increments("id").primary();
      table.decimal("sodiumProductionRate");
      table.decimal("potassiumProductionRate");
      table.decimal("chlorideProductionRate");
      table.decimal("bicarbonateProductionRate");
      table.decimal("BUNProductionRate");
      table.decimal("creatinineProductionRate");
      table.decimal("calciumProductionRate");
      table.decimal("filtrationFractionStarting");
      table.text("gender");
      table.decimal("usualWeight");
      table.text("historyOfPresentIllness");
      table.text("vitalSigns");
      table.text("medications");
      table.text("imaging");
      table.text("physicalExam");
      table.text("warningRanges");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("cases")]);
};
