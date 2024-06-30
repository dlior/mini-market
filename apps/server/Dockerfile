FROM node:20-alpine

ARG APP

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm build ${APP}
