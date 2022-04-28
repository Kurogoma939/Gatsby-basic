FROM node:14.17.5-slim

WORKDIR /home/node/app

RUN apt-get update && \
    apt-get install -y git

RUN npm install -g gatsby-cli && \
    npm install

EXPOSE 8000 9000