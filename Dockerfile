FROM node:18.16.0-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5000

RUN chown -R node:node /usr/src/app

USER node

RUN rm -f package.json

FROM build

COPY --from=build /usr/src/app /usr/src/app

# Install Node.js and npm in the final stage
# RUN apk --no-cache add nodejs npm

WORKDIR /usr/src/app

CMD ["npm", "run", "dev"]
