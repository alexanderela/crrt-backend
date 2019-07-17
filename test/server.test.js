process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server');
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const { patientCases, caseStudyNew, caseStudyWrongDataType, caseStudyMissingData } = require('../caseTestData.js');

// const testCases = require('../caseTestData.js');

chai.use(chaiHttp)

describe('server', () => {
	before(done => {
		database.migrate.rollback()
			.then(() => database.migrate.latest())
			.then(() => database.seed.run())
			.then(() => done())
	});

	after(done => {
		database.migrate.rollback()
			.then(() => console.log('Testing complete.  DB rolled back'))
			.then(() => done())
	});

	describe('GET /api/v1/cases', () => {
		it('should return 200 status code on successful request', done => {
			chai.request(app)
				.get('/api/v1/cases')
				.end((error, response) => {
					expect(response).to.have.status(200);
					done();
				});
		});
		
		it('should return 404 status code for route that does not exist', done => {
			chai.request(app)
				.get('/api/v1/casez')
				.end((error, response) => {
					expect(response).to.have.status(404);
					done();
				})
		});

		it('should return an array of cases', done => {
			chai.request(app)
				.get('/api/v1/cases')
				.end((error, response) => {
					const pastMedicalHistory1 = JSON.parse(response.body[0].historyOfPresentIllness).pastMedicalHistory
					const pastMedicalHistory2 = JSON.parse(response.body[1].historyOfPresentIllness).pastMedicalHistory

					expect(response.body[0].id).to.equal(1)
					expect(pastMedicalHistory1[2]).to.equal('COPD')
					expect(response.body[1].id).to.equal(2)
					expect(pastMedicalHistory2[2]).to.equal('Chronic pancreatitis')
					done();
				})
		});
	});

	describe('POST /api/v1/cases', () => {
		it('should post a new case', done => {
			chai.request(app)
				.post('/api/v1/cases')
				.send(caseStudyNew)
				.end((error, response) => {
					expect(response.body.id).to.equal(3)
					done();
				});
		});

		it('should return 201 status code on successful request', done => {
			chai.request(app)
				.post('/api/v1/cases')
				.send(caseStudyNew)
				.end((error, response) => {
					expect(response).to.have.status(201)
					done();
				});
		});
		
		it.skip('should return 415 status code for improper formatting', done => {
			chai.request(app)
				.post('/api/v1/cases')
				.send(caseStudyMissingData)
				.end((error, response) => {
					expect(response).to.have.status(415)
					done();
				});
		});
		
		it.skip('should return 404 status code when id not found', done => {
			
		});
	});
	
	describe('PATCH /api/v1/cases/:id', () => {
		it.skip('should return 204 status code on successful request', done => {});
		
		it.skip('should return 415 status code for improper formatting', done => {});
	});
	
	describe('DELETE /api/v1/cases/:id', () => {
		it.skip('should return 200 status code on successful request', done => {});
	});
});
