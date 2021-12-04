 FROM node:12
 # Create app directory, this is in our container/in our image
 WORKDIR /app
 COPY package*.json ./
 RUN yarn install
 COPY . .
 RUN yarn run build
 EXPOSE 8080
#  CMD node /app/dist/main.js
#  ./dist/main
 CMD [ "node", "dist/main.js" ]