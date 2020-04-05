ARG myworkdir=ilya-online-react-api

FROM node:12 AS builder
WORKDIR /$myworkdir
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "start:prod"]
