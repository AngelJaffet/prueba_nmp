'use strict';

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const app = express();
const user = require('./controllers/user');
const utils = require('./controllers/utils');
const PORT = process.env.PORT || 8080;

app.use( multer({ storage: multer.memoryStorage() }).any() );

app.get('/api/', (req, res) => {
	let test1 = utils.myFunction([1, 2, 3], [3, 4, 5]);
	let test2 = utils.myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);
	let test3 = utils.myFunction([-10, 22, 333, 42, undefined], [-11, 5, 22, 41, 42, 'a', 3.2]);

	var response = 'Result test 1: <br><strong>[' + test1.join(', ') + ']</strong>';
	response += '<br><br>Result test 2: <br><strong>[' + test2.join(', ') + ']</strong>';
	response += '<br><br>Result test 3: <br><strong>[' + test3.join(', ') + ']</strong>';

	console.log(test1, test2, test3);
	res.send(response);
});
app.get('/api/getInfo/:id', user.getInfo);
app.post('/api/uploadFile', user.uploadFile);
app.get('*', function(req, res){ res.status(404).json({ 'status': false, 'description': 'Not Found' }); });

app.listen(PORT, function(){ 
	console.log('App running at:'); 
	console.log('   - Local:', '\x1b[36m', `http://localhost:${PORT}/api/`, '\x1b[0m');
});

module.exports = app;