FROM node

COPY sender.js .

COPY package.json .

RUN npm install

CMD ["node", "sender.js"]

EXPOSE 3000