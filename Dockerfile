# Set basic node version
FROM node:12.13.1

COPY package.json ./

# RUN npm i http-server

COPY . .
# Install mirror
RUN npm i


# Build project
RUN npm run build

EXPOSE 80 443

CMD [ "node", "server.js" ]