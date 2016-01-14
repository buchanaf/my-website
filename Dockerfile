FROM nodesource/node:4.0

ADD package.json package.json
RUN npm install

ADD . .
RUN npm run build

EXPOSE  8000
CMD ["npm", "run", "start-prod"]