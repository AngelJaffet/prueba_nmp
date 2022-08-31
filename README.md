# Prueba Nacional Monte de Piedad - Angel Jaffet
Se detalla a continuación la forma de instalar y probar el proyecto.

## Tabla de contenido  
[⚙️ Tecnologías](#tecnologias)  
[👨‍💻 Configuración e instalación del API](#configuracion)  
[👨‍💻 Pruebas del API mediante Postman](#postman)  
[🎯 Puesta en producción del API](#produccion)  
[👀 Demo](#demo)  

<a name='tecnologias'/>

## ⚙️ Tecnologías
FrontEnd:
- HTML
- CSS
- JavaScript

BackEnd: 
- [MySQL] - Como motor de base de datos
- [Node.js] - Para el correr el API
- Dependencias:

  ```json
  {
      "dotenv": "^16.0.1",
      "express": "^4.18.1",
      "multer": "^1.4.5-lts.1",
      "mysql2": "^2.3.3"
  }
   ```

Y por supuesto, el código se encuentra en [Github].

<a name='configuracion'/>

## 👨‍💻 Configuración e instalación del API
El proyecto requiere de [Node.js] y [MySQL] de para poder ejecutarlo.

1. Descargue e instale [Node.js]
2. Descargue e instale [MySQL]
3. Acceda al directorio `/api` y ejecute el comando:

   ```sh
   > npm install
   ```
   ![npm install](page/img/npm_install.png?raw=true 'npm install')
4. Cree una nueva base de datos (Ej. prueba_nmp) y ejecute el script `db/users.sql`
5. Para configurar las claves de acceso a la DB edite el archivo `.env`
   ```sh
   Por ejemplo para el caso donde tiene los siguientes datos de acceso: 
      host: localhost
      user: root
      pass: pass
      dbname: prueba_nmp

   Debera colocar en el archivo la siguiente linea:
      DATABASE_URL='mysql://root:pass@localhost/prueba_nmp'
   ```
6. Una vez configurada la variable de entorno, ejecute el siguiente comando:

   ```sh
   > npm run serve
   ```
7. Le debera aparecer en consola la URL sobre la cual podra probar el API. Ej: http://localhost:8080/api/

   ![npm run serve](page/img/npm_run_serve.png?raw=true 'npm run serve')

<a name='postman'/>

## 👨‍💻 Pruebas del API mediante Postman

1. Descargue e instale [Postman]
2. De clic en importar

   ![postman import](page/img/postman_import.png?raw=true 'postman import')
3. Busque y seleccione el archivo `Prueba NMP.postman_collection.json`

   ![postman import](page/img/postman_import_prueba.png?raw=true 'postman import')
4. De clic en `Import` y debera aparecerle la siguiente colección

   ![postman import](page/img/postman_collection.png?raw=true 'postman import')
5. En esa colección aparecen 2 entornos (Localhost y Producción), seleccione el de su preferencia
6. En el caso del endpoint `/api/uploadFile` es necesario seleccionar la pestaña `Body` en la opción `form-data` y enviar el archivo de la prueba con la key `file_users`, Ej.

   ![postman import](page/img/postman_test_uploadFile.png?raw=true 'postman import')
7. En el caso del endpoint `/api/getInfo/:id` es necesario modificar el `:id` de la URL y sustituirlo por el ID que queremos obtener, Ej.

   ![postman import](page/img/postman_test_getInfo.png?raw=true 'postman import')
8. Al dar clic en `Send` debera aparecerle una respuesta como en el ejemplo anterior

<a name='produccion'/>

## 🎯 Puesta en producción del API
Da click en el siguiente enlace y corre la API en un instante 😃

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAngelJaffet%2Fprueba_nmp)

<a name='demo'/>

## 👀 Demo
- Prueba FrontEnd 
   - https://prueba-nmp.vercel.app/
   - https://prueba-nmp.vercel.app/page/ejercicio1.html
   - https://prueba-nmp.vercel.app/page/ejercicio2.html
   - https://prueba-nmp.vercel.app/page/ejercicio3.html
- Prueba BackEnd 
   - https://prueba-nmp.vercel.app/api/ (GET)
   - https://prueba-nmp.vercel.app/api/getInfo/:id (GET)
   - https://prueba-nmp.vercel.app/api/uploadFile/ (POST)

[Node.js]: <https://nodejs.org/>
[MySQL]: <https://www.mysql.com/>
[Postman]: <https://www.postman.com/>
[Github]: <https://github.com/AngelJaffet/prueba_nmp>