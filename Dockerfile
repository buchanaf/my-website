FROM node:argon

ADD package.json package.json
RUN npm install --silent
RUN npm run build

ADD . .

CMD ["npm", "run", "start-prod"]