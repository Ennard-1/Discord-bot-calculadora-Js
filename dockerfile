FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

# Comando padrão para iniciar o bot
CMD ["node", "index.js"]
