FROM node:argon

ADD package.json package.json
RUN npm install

ADD . .

CMD ["npm", "run", "start-prod"]