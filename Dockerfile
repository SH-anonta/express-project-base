# escape=`

FROM node:12.16.1-alpine3.9

EXPOSE 3000:3000
WORKDIR /home/app

COPY ./package.json ./package.json
VOLUME ./ ./
RUN npm install

CMD npm start
