FROM node:18.17.0-alpine3.18
WORKDIR /app
COPY package.json package-lock.json . 
RUN npm install
ENV PORT=3000 
COPY . . 
CMD ["node", "app.js"]

