'use strict';

const db = require('../controllers/db');

class User{
	constructor(){
		this.id =  null;
		this.name =  null;
		this.age =  null;
		this.gender =  null;
		this.created_at =  null;
		this.updated_at =  null;
	}

	async save(){
		// Obtenemos la instancia de la base de datos
		const conn = await db.getInstance();
		try {
			// Intentamos hacer la insercion en la base de datos o actualizar la informacion
			const [rows, fields] = await conn.execute(
				'INSERT INTO users(id, name, age, gender) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name), age = VALUES(age), gender = VALUES(gender);', 
				[this.id, this.name, this.age, this.gender]
			);
			return true;
		} catch (e) {
			// En caso de error regresamos false y mostramos el error en la consola
			console.log('Error al guardar los datos del usuario: ', e);
			return false;
		}
	}

	async getById(id){
		// Validamos si el usuario es numerico, si no regresamos false
		if( isNaN(id) ) return false;
		// Obtenemos la instancia de la base de datos
		const conn = await db.getInstance();
		try {
			// Intentamos consultar de usuario por ID
			const [rows, fields] = await conn.execute(
				'SELECT * FROM users WHERE id = ? LIMIT 1;', 
				[id]
			);

			// Si la cantidad de resultados es igual a 1 seteamos la informacion del usuario
			if(rows.length == 1){
				let info = rows[0];
				this.id = info.id;
				this.name = info.name;
				this.age = info.age;
				this.gender = info.gender;
				this.created_at = info.created_at;
				this.updated_at = info.updated_at;
			}

			return rows;
		} catch (e) {
			// En caso de error regresamos false y mostramos el error en la consola
			console.log('Error al seleccionar el usuario: ', e);
			return false;
		}
	}
}

module.exports = User;