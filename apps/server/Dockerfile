FROM node:20-alpine

ARG APP
ARG PORT

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm build ${APP}
