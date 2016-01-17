FROM    centos:centos6

RUN     yum install -y epel-release
RUN     yum install -y nodejs npm

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --silent
RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www/

WORKDIR /var/www
ADD . /var/www

EXPOSE 8000

CMD ["npm", "run", "start-prod"]