FROM node:18-alpine

EXPOSE 8080

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/kali/devsecops-example

COPY . .

RUN npm install

RUN chown -R node:node .

USER node
    
CMD [ "node", "app.js" ]
