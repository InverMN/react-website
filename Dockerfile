FROM nginx:alpine

COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html

EXPOSE 80