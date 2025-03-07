# Fresh project: Trivia Web App

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.



Esta es una aplicación web simple que accede a una API de trivia para obtener preguntas y respuestas. Dependiendo de si se responde correctamente o no, redirige a diferentes rutas dentro de la aplicación.

## Funcionalidades

- **Obtención de Pregunta**: Al cargar la página, la aplicación hace una solicitud a la API de trivia para obtener una pregunta aleatoria.
- **Verificación de Respuesta**: Permite al usuario ingresar una respuesta y verifica si es correcta.
- **Interfaz de Usuario**: Muestra la pregunta y proporciona botones de navegación para volver a jugar o salir.

## Tecnologías Utilizadas

- **Frontend**: Utiliza React.js para la interfaz de usuario.
- **Backend**: Utiliza Node.js con el framework Fresh para manejar las solicitudes y renderizar la página.

## Configuración

Antes de ejecutar la aplicación, asegúrate de tener configurada la variable de entorno `X-Api-Key` con tu clave de API válida para `https://api.api-ninjas.com/v1/trivia`.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/trivia-web-app.git`
2. Instala las dependencias: `npm install`
3. Inicia la aplicación: `npm start`

## Uso

Una vez iniciada la aplicación, accede a `http://localhost:8000` en tu navegador para jugar a la trivia. Sigue las instrucciones en pantalla para responder a la pregunta mostrada.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/mejora-trivia`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añade una nueva característica'`).
4. Haz push a la rama (`git push origin feature/mejora-trivia`).
5. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

