FROM node:lts-alpine3.17
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 8080 
CMD [ "npm", "run", "start" ]

