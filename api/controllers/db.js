'use strict';

var mysql = require('mysql2/promise');
var instance;

module.exports = {
	getInstance: async function(){
		if (instance) return instance;
		instance = await mysql.createConnection(process.env.DATABASE_URL);
		return instance;
	}
};