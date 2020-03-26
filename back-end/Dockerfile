# escape=`

FROM node:12.16.1-alpine3.9

EXPOSE 3000:3000
EXPOSE 9229:9229

# we need these for debugging purposes
RUN npm install -g nodemon ts-node

WORKDIR /home/app

COPY ./package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start-watch"]
