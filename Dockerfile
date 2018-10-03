FROM node:8

WORKDIR /app

ADD lambda /lambda
ADD models /models

RUN npm install
RUN npm test


