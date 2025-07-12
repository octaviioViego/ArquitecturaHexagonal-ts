# Informacion general:
Implementación de una arquitectura hexagonal usando typescript, el porposito de este proyecto es el tener el primer acercamiento a la teoria y a la implementacion de la arquitectura hexagonal. 

# 🚀 Tecnologías utilizadas
- TypeScript
- Node.js
- Express

# Método de implementación
- Descargar el repositorio en una carpeta con el siguiente comando: git clone https://github.com/octaviioViego/ArquitecturaHexagonal-ts.git Antes de continuar debes de tener instalado Node.js

- Para correr el programa: npm run dev

# Explicación del funcionamiento del proyecto con la arquitectura hexagonal

- 1. El proyecto esta dividido en 3 carpetas "domain, application y infraestructure"
- 2. La carpeta domain (dominio) tenemos nuestro modelo usuario, aparte tenemos nuestros servicios de dominio (métodos de la clase) los cuales sirven para definir nuestros value object.
- 3. La carpeta application (aplicación) tenemos nuestro casos de uso, son la funcionalidades de nuestro sistema. La Aplicación se relaciona con el dominio pero el dominio no se relaciona con la aplicación. Es importante decir que el caso de uso no es el responsable de insertar los datos, simplemente es el responsable de dar la orden , pasor los datos y esperar una respuesta.
- 4. La carpeta de infraestructure (infraestructura) tiene todo lo exterior que no controlamos, es decir, bases de datos, controladores, frameworks etc. En esta parte implementamos la interface del domonio.
- 5. En nuestra infraestuctura es donde se implementa nuestro patrón de diseño 'Adapter', ya que si tenemos una respuesta de la BD postgreSQL lo adaptamos esa respuesta a la aplicación de dominio.
- 6. Tenemos un contenedor de dependencias que no pertenece a nuestro arquitectura hexagonal, sin embargo se usa para definir el repositorio que de va a usar en toda la app. Su uso también su funcion es de solo instanciar y conectar los objetos, no crea las conexiones como tal, solo pasa los parámetros necesarios a quien si los crea. Ahi podemos cambiar nuestro repositorio (refiriendonos de donde se guardan los usuarios) en una sola linea como ejemplo.  

# 👨 Autor:
- Fernando Octavio Arroyo Velasco.
- Estudiante de la UACM en la carrera de ing de software.

# ⚖️ Licencia 
- Este proyecto está licenciado bajo la licencia MIT. Puedes usuarlo, modificarlo y compartirlo libremente.

