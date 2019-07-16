process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server');
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

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

	describe('GET /api/v1/cases', () => {});

	describe('POST /api/v1/cases', () => {});
	
	describe('PATCH /api/v1/cases/:id', () => {});
	
	describe('DELETE /api/v1/cases/:id', () => {});
});
