FROM node:argon

ADD package.json package.json
RUN npm install --silent

ADD . .
EXPOSE 8000

CMD ["npm", "run", "start-prod"]