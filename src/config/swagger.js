// src/config/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'AdoptMe API',
      description: 'Documentación del módulo Users para AdoptMe',
    },
  },
  apis: ['./src/routes/users.router.js'],
};

const specs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, specs };
