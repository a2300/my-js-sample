# Use a lightweight base image
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN npm install pm2 -g

RUN npm run build

COPY ./dist .

EXPOSE 4000

CMD ["pm2-runtime","app.js"]