// Esperamos a que cargue completamente el DOM
document.addEventListener('DOMContentLoaded', function(){
	const button = document.getElementById ('button');
	const list = document.getElementById ('list');
	const input = document.getElementById ('input');

	button.addEventListener('click', () => {
		// Obtenemos el valor del input
		var item = input.value;
		// Eliminamos espacios vacios al inicio y final de la cadena
		item = item.trim();
		// Validamos si la longitud del elemento es mayor que 0 para insertar el elemento
		if( item.length > 0 ){
			// Añadimos el valor a la lista
			list.innerHTML += '<li>'+input.value+'</li>';
			// Borramos el valor del input
			input.value = '';
		}
	});
});