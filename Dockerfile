FROM node:argon

ADD package.json package.json
RUN npm install --silent

ADD . .

CMD ["npm", "run", "start-prod"]