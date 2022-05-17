FROM node:16-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn

ENV PORT=3000

EXPOSE 3000

COPY . .

CMD ["yarn","dev"]