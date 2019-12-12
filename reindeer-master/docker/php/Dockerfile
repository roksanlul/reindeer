FROM php:7-fpm-alpine
MAINTAINER Dmitry Sergeev <identw@gmail.com>

RUN docker-php-ext-install mysqli && \
    docker-php-ext-install json && \
    docker-php-ext-install pdo_mysql &&\
    docker-php-source delete && \
    rm -fv /usr/local/etc/php-fpm.d/*

COPY ./www.conf /usr/local/etc/php-fpm.d/

WORKDIR /var/www
CMD ["php-fpm"]
