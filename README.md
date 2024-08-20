# LinkBook
Es una aplicación web para gestionar recursos. 
Es una solución para las personas, ya que te brinda un almacenamiento confiable y permanente de tus recursos.
Tiene el objetivo de guardar tus enlaces mas valiosos de manera fácil.

### Caracteristicas
* Panel para gestionar los enlaces.
* Distintos filtros para encontrar un enlace
* Utiliza localstorage para la persistencia
* Codifica las imagenes en base64
* Descargar los enlaces en formato PDF

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Utilizar aplicación](#utilizar-aplicación)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Stack de tecnologías](#stack-de-tecnologías)
5. [Desarrollo](#desarrollo)
6. [Despliegue](#despliegue)
7. [Contribuir](#contribuir)
8. [Licencia](#licencia)
9. [Autores y reconocimientos](#autores-y-reconocimientos)
10. [Contacto y soporte](#contacto-y-soporte)

## Instalación
### Requisitos previos
- Node.js v20.12.0

### Instrucciones de instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Geider10/Markbooks.git

2. Instalar dependencias:
    ```sh
    npm install
### Archivos de configuración
`package.json`: Configuración por defecto.

## Utilizar aplicación
Levantar el frontend en el puerto 5173
```sh
npm start
```

## Stack de tecnologías
* JavaScript
* React
* TailwindCSS
* CSS
* HTML

## Desarrollo

### React hooks
- `useState` renderiza los componentes dinamicamente
- `useEffect` renderiza las cartas segun el tipo de filtro
- `useContext`: tiene estados, actualiza el valor de los tags y list ,tiene los metodos ABM y estos realizan la persistencia.
- `useParams`: lo utilicé para obtener el ID dinamico de las cartas desde la ruta.

### ABM
Links : 
1. Get: es una estado de tipo `linksList` se actualiza su valor siempre que se ejecuta un metodo `ABM`.
2. Post: permite agregar un enlace, tiene que recibir del formulario un `link` con los atributos completos. Este link se agrega a la lista y luego se guardar en el localstorage.
3. PUT: actualiza los atributos del link, cuando presiona el btnEdit recibe el `id` y hace un `find` sobre la lista para retornar un `linkId`. Luego se actualiza en la lista y se hace la persistencia.
4. DELETE: elimina un link de la lista. Cuando presion el btnDelete recibe el `linkId` y luego hace un `filter` de los links descartando el `link` por su ID.  Al final se hace la persistencia.

Tags : 
1. Get: es una estado de tipo `tagList` se actualiza su valor siempre que se ejecuta un metodo `ABM`.
2. Post: permite agregar un tag, tiene que recibir del formulario un `tagName`. Este tag se agrega a la lista y luego se guardar en el localstorage.
3. Put:  actualiza el nombre del tag, cuando presiona el btnEdit recibe el `id` y hace un `find` sobre la lista para retornar un `tagId`. Luego se actualiza en la lista y se hace la persistencia.
4. Delete: elimina un tag de la lista. Cuando presion el btnDelete recibe el `tagId` y luego hace un `filter` de los tags descartando el `tag` por su ID. Al final se hace la persistencia.


### Dependencias
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): te permite gestionar el enrutamiento de la aplicación, permitiendo cambiar entre vistas sin recargar la web.
- [react-hook-form](https://react-hook-form.com/docs): te permite gestionar formularios y hacer validaciones de manera fácil. 


## Despliegue
### Link del deploy
Muy pronto

## Contribuir
### Guía de contribución
Para contribuir de manera efectiva y ordena, por favor sigue las instrucciones.
1. Configura el entorno: Clona el repositorio, instala dependencias y configura las variables de entorno.
2. Sigue los estándares: Asegúrate de seguir las convenciones de código y ejecutar pruebas antes de enviar un pull request.
3. Envía Pull Requests: Crea una nueva rama, realiza tus cambios, y envía un pull request para revisión.
4. Actualizar documentacion: Si es necesario. 
### Código de conducta
Para mantener un entorno respetuoso e inclusivo, todos los colaboradores deben:
1. Tratar a los demás con respeto.
2. Fomentar la inclusión y la diversidad.
3. Resolver desacuerdos de manera constructiva.

## Licencia
Este proyecto está bajo la licencia MIT. Ver el archivo LICENSE para más detalles.

## Autores y reconocimientos
* Geider Yoel Frias - Desarrollador Full Stack, especializado en backend.

## Contacto y soporte
* Email: geiderfrias@outlook.es
* Telefono: +54 9 1161539624
* LinkedIn: https://www.linkedin.com/in/geiderfrias/

### Notas Adicionales
Creditos del readme a Omar.