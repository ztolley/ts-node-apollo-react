FROM node:lts as build-env-server
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./ ./
run npm run codegen
RUN npm run build


FROM node:lts
WORKDIR /app

COPY --from=build-env-server /app ./

CMD ["npm", "start"]
