FROM nginx:1.12-alpine
MAINTAINER Dmitry Sergeev <identw@gmail.com>

COPY ./default.conf /etc/nginx/conf.d/
COPY ./nginx.conf /etc/nginx/
CMD nginx -g "daemon off;"
