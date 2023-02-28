export const env = {
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  database: {
    type: 'postgres' as const,
    host: process.env.DB_HOST || 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
  },
};
