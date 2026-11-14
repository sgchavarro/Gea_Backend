import pg from 'pg';
import { config } from './environment.js';

const { Pool } = pg;

export const pool = new Pool(config.postgres);

pool.on('connect', () => {
  if (config.nodeEnv === 'development') {
    console.log('🐘 [PostgreSQL] Nuevo cliente físico asignado en el Pool');
  }
});

pool.on('error', (err) => {
  console.error('❌ [PostgreSQL Error en Cliente Ocioso]:', err.message);
});

export async function connectDatabases() {
  console.log('🔌 [GEA] Inicializando conexiones...');

  // A. Verificación PostgreSQL
  try {
    const res = await pool.query('SELECT NOW() AS t, current_database() AS db');
    console.log(`✅ [PostgreSQL Conectado] Base: "${res.rows[0].db}"`);
  } catch (err) {
    console.error(`❌ [PostgreSQL Falló Conexión]: ${err.message}`);
  }
}

export async function disconnectDatabases() {
  await pool.end();
  console.log('🔒 Ambas bases de datos cerradas correctamente');
}
