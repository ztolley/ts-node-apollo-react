FROM node:lts as build-env-client
WORKDIR /app

RUN mkdir /app/client
COPY ./client/package.json /app/client/package.json
COPY ./client/package-lock.json /app/client/package-lock.json

RUN mkdir -p /app/server/src/graphql
COPY ./server/src/graphql/schema.graphql /app/server/src/graphql/schema.graphql

WORKDIR /app/client
RUN npm install

COPY ./client /app/client
RUN npm run codegen
RUN npm run build

FROM nginx
RUN mkdir -p /var/www/html
COPY --from=build-env-client /app/client/build /var/www/html
RUN chmod a+r /var/www/html/favicon.ico
RUN chmod a+r /var/www/html/*.png
