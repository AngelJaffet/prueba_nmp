'use strict';

const User = require('../models/user');

module.exports = {
	getInfo: async function(req, res){
		// Obtenemos el id de la peticion del servicio
		const { id } = req.params;
		// Creamos un nuevo objeto de tipo User 
		let user = new User();
		// Realizamos la consulta de usuario por ID
		let info = await user.getById(id);
		// Entregamos los resultados
		if( info && info.length > 0)
			res.json({ 'status': true, 'info': info[0] });
		else 
			res.json({ 'status': false, 'error': 'No se encuentra el usuario con id: ' + id });
	},
	uploadFile: async function(req, res){
		var countInserts = 0;
		// Obtenemos informacion sobre los archivos de la peticion
		let files = req.files;
		// Si tenemos archivos en la peticion continuamos
		if(files){
			// Obtenemos el indice donde se encuentra la clave del archivo esperado
			let index = files.findIndex(f => f.fieldname == 'file_users');
			// Si no se encuentra el indice esperado se regresa un mensaje de error
			if(index < 0) {
				res.status(400).json({ 'status': false, 'error': 'No se proporciono el archivo esperado.' });
			}
			// Leemos el contenido del archivo y lo transformamos en un String
			const fileContent = String(files[index].buffer);
			// Convertimos el archivo en un array por lineas para poder iterar sobre cada una de ellas
			const fileLines = fileContent.split(/\r?\n/);

			for (const content of fileLines) {
				// Separamos el contenido de cada linea para obtener los valores deseados
				let data = content.split(',');
				// Si el indice 0 de la data (equivalente al id) es numerico continuamos y si contiene el numero exacto de parametros esperados
				if( !isNaN(data[0]) && data[0].trim() != '' && data.length == 4 ){
					// Obtenemos los datos necesarios
					let id = ( data[0].trim() == '' || isNaN(data[0]) ) ? null : data[0];
					let name = data[1].trim() || null;
					let age = ( data[2].trim() == '' || isNaN(data[2]) ) ? null : data[2];
					let gender = data[3].trim() || null;

					// Creamos un nuevo objeto de tipo User y establecemos sus valores
					let user = new User();
					user.id = id;
					user.name = name;
					user.age = age;
					user.gender = gender;
					// Guardamos los datos del usuario en la DB
					let response = await user.save();
					if(response) countInserts++;
				}
			}
			if(countInserts > 0) 
				res.json({ 'status': true, 'description': 'Se guardaron los datos correctamente', 'inserts': countInserts });
			else 
				res.json({ 'status': false, 'description': 'No se pudo insertar nuevos datos' });
		} else {
			// Si no tenemos archivos en la peticion regresamos un mensaje
			res.status(400).json({ 'status': false, 'error': 'No se proporciono ningun archivo.' });
		}
	}
};