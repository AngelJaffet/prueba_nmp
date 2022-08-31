function myFunction(elements, index_position){
	// Verificamos si nos estan compartiendo un array
	var is_array = Array.isArray(elements);
	// Sacamos el valor negativo
	index_position = -1 * parseInt(index_position);
	// Si es un array usamos la funcion slice que devuelve los ultimos n elementos de un array
	if( is_array ){
		return elements.slice(index_position);
	}
	// Si no regresamos false
	return false;
}

// Imprimimos en consola los resultados de los casos de prueba
console.log(
	myFunction([1,2,3,4,5], 2)
);
console.log(
	myFunction([1,2,3], 6)
);
console.log(
	myFunction([1,2,3,4,5,6,7,8], 3)
);
console.log(
	myFunction("No soy un array", 3)
);
console.log(
	myFunction(1, 3)
);