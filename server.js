const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const database = require('knex')(config);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));




app.listen(app.get('port'), () => {
	console.log(`Server is running on ${app.get('port')}.`)
});