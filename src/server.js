import app from './app.js'
import { config } from './config/environment.js';
import { connectDatabases, disconnectDatabases } from './config/db.js';

async function bootstrap() {
    await connectDatabases();

    const server = app.listen(config.port, () => {
        console.log(`🚀 Servidor activo en: http://localhost:${config.port}`);
    });

    // handleShutdown gestor de apagados
    const handleShutdown = async (signal) => {
        console.log(`\n⚠️  ${signal} recibido. Cerrando conexiones limpiamente...`);
        server.close(async () => {
            await disconnectDatabases();
            process.exit(0);
        });
    };

    //señal enviada a un proceso para solicitar que se interrumpa o se detenga su ejecución
    process.on('SIGINT', () => handleShutdown('SIGINT'));
    //envía a un proceso para solicitar su finalización de manera ordenada y segura
    process.on('SIGTERM', () => handleShutdown('SIGTERM'));
}

//arranque de la aplicacion
bootstrap();