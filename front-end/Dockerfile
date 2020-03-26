# escape=`

FROM node:12.16.1-alpine3.9

EXPOSE 4200:4200

WORKDIR /home/app

# needed for debugging
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install

COPY . .

CMD ["ng", "serve", "--host=0.0.0.0", "--port=4200"]
