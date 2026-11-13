# Backend GEA

Backend en desarrollo para el proyecto GEA. La estructura actual incluye una API con una ruta de diagnóstico (`/api/health`) y configuración de conexión a PostgreSQL.

## Tecnologías

- **Node.js** con módulos ES (`import` / `export`).
- **Express** para las rutas HTTP.
- **PostgreSQL** mediante el paquete `pg` y un pool de conexiones.
- **dotenv** para cargar la configuración desde `.env`.

## Requisitos previos

- Node.js y npm instalados.
- Una instancia de PostgreSQL disponible y una base de datos creada.

## Instalación y configuración

1. Abre una terminal en la carpeta `backend`:

   ```bash
   cd backend
   ```

2. En el estado actual del repositorio no hay un `package.json`. Inicializa el proyecto e instala las dependencias usadas por el código:

   ```bash
   npm init -y
   npm install express pg dotenv
   ```

3. Crea un archivo `.env` dentro de `backend` y configura la conexión:

   ```env
   no se agrega la configuracion del .env por temas de privacidad
   ```


4. Para ejecutar la aplicación localmente hace falta un archivo de entrada que cree el servidor Express, registre la ruta de salud y escuche en el puerto configurado. Ese archivo y el script de inicio todavía no están incluidos en el repositorio, así que aún no hay un comando `npm start` funcional.

## Ruta disponible

La ruta definida en el código es `GET /api/health` (si se monta bajo el prefijo `/api/health`). Comprueba la conexión con PostgreSQL y devuelve el estado de salud de los servicios.

## Estructura de carpetas

```text
backend/
└── src/
    ├── config/
    │   ├── db.js              # Pool y conexión a PostgreSQL
    │   └── environment.js     # Variables de entorno y valores de configuración
    ├── controllers/
    │   └── healthController.js # Comprobación de salud de la API y PostgreSQL
    └── routes/
        └── healthRoutes.js    # Definición de la ruta de salud
```
