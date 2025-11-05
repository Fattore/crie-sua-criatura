import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  try {
    // Registrar CORS
    await fastify.register(cors, {
      origin: true,
    });

    // Registro de rotas
    // TODO: Importar e registrar rotas aqui
    fastify.get('/health', async () => {
      return { status: 'ok', message: 'Backend funcionando!' };
    });

    await fastify.listen({ port: 3001, host: '0.0.0.0' });
    console.log('🚀 Backend rodando em http://localhost:3001');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

