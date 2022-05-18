FROM node:16-alpinez

WORKDIR /app

COPY ./package.json .

RUN yarn

ENV PORT=3000

EXPOSE 3000

COPY . .

CMD ["yarn","dev"]