process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server');
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('server', () => {
	describe('GET /api/v1/cases', () => {});

	describe('POST /api/v1/cases', () => {});
	
	describe('PATCH /api/v1/cases/:id', () => {});
	
	describe('DELETE /api/v1/cases/:id', () => {});
});
