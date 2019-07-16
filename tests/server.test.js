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

	describe('GET /api/v1/cases', () => {
		it('should return 200 status code on successful request', done => {});
		it('should return 404 status code for route that does not exist', done => {});
		it('should return 500 status code on unsuccessful request', done => {});
		it('should return an array of cases', done => {});
	});

	describe('POST /api/v1/cases', () => {
		it('should return 201 status code on successful request', done => {});
		it('should return 415 status code for improper formatting', done => {});
		it('should return 500 status code on unsuccessful request', done => {});
	});
	
	describe('PATCH /api/v1/cases/:id', () => {
		it('should return 204 status code on successful request', done => {});
		it('should return 415 status code for improper formatting', done => {});
		it('should return 500 status code on unsuccessful request', done => {});
	});
	
	describe('DELETE /api/v1/cases/:id', () => {
		it('', done => {});
		it('', done => {});

	});
});
