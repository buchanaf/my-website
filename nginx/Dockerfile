FROM nginx:latest

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /var/www/dist
COPY favicon.ico /var/www/dist/

WORKDIR /var/www




