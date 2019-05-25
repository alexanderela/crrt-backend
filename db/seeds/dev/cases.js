

const createCase = (knex, patientCase) => {
  return knex('cases').insert({
    sodiumProductionRate: patientCase.sodiumProductionRate,
    potassiumProductionRate: patientCase.potassiumProductionRate,
    chlorideProductionRate: patientCase.chlorideProductionRate,
    bicarbonateProductionRate: patientCase.bicarbonateProductionRate,
    BUNProductionRate: patientCase.BUNProductionRate,
    creatinineProductionRate: patientCase.creatinineProductionRate,
    calciumProductionRate: patientCase.calciumProductionRate,
    filtrationFractionStarting: patientCase.filtrationFractionStarting,
    gender: patientCase.gender,
    usualWeight: patientCase.usualWeight,
    historyOfPresentIllness: JSON.stringify(patientCase.historyOfPresentIllness),
    vitalSigns: JSON.stringify(patientCase.vitalSigns),
    medications: JSON.stringify(patientCase.medications),
    imaging: JSON.stringify(patientCase.imaging),
    physicalExam: JSON.stringify(patientCase.physicalExam)
  }, 'id');
}




exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cases').del()
    .then(function () {
      // Inserts seed entries
      return knex('cases').insert([
      ]);
    });
};
