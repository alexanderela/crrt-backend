const patientCases = require("../../../caseSeedData.js");

const createCase = (knex, patientCase) => {
  return knex("cases").insert(
    {
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
      historyOfPresentIllness: JSON.stringify(
        patientCase.historyOfPresentIllness
      ),
      vitalSigns: JSON.stringify(patientCase.vitalSigns),
      medications: JSON.stringify(patientCase.medications),
      imaging: JSON.stringify(patientCase.imaging),
      physicalExam: JSON.stringify(patientCase.physicalExam),
      warningRanges: JSON.stringify(patientCase.warningRanges)
    },
    "id"
  );
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cases")
    .del()
    .then(() => {
      let casePromises = [];
      patientCases.forEach(patientCase => {
        casePromises.push(createCase(knex, patientCase));
      });
      return Promise.all(casePromises);
    })
    .catch(error => console.log(`Error seeding testing DB data: ${error}`));
};
