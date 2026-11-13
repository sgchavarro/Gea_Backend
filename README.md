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
