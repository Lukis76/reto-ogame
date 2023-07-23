# Usa una imagen de Node.js como base
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json (o yarn.lock si estás usando Yarn)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install -g pnpm

RUN pnpm install

# Copia todos los archivos de tu proyecto al contenedor
COPY . .

# Inicia tu aplicación de Next.js
CMD ["npm", "run", "dev"]
