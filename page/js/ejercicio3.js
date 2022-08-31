const removeRedCircle = () => {
	// Buscamos el elemento con id red
	var red = document.getElementById('red');
	// Si el elemento existe en el DOM procedemos a eliminarlo
	if( red != null ){
		// Buscamos al elemento padre y eliminamos el elemento con id red
		red.parentNode.removeChild(red);
		console.log('Eliminamos el elemento red');
	} else {
		console.log('El elemento red no existe en el DOM');
	}
}

// Esperamos a que cargue completamente el DOM
document.addEventListener('DOMContentLoaded', function(){
	const button = document.getElementById('button');
	button.addEventListener('click', removeRedCircle);
});