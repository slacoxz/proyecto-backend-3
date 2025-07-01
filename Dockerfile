# Imagen base
FROM node:20

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]
