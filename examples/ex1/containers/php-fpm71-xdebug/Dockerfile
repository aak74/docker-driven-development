FROM php:7.1-fpm-alpine

ARG BUILD_DATE
ARG VCS_REF

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV PHP_XDEBUG_DEFAULT_ENABLE ${PHP_XDEBUG_DEFAULT_ENABLE:-1}
ENV PHP_XDEBUG_REMOTE_ENABLE ${PHP_XDEBUG_REMOTE_ENABLE:-1}
ENV PHP_XDEBUG_REMOTE_HOST ${PHP_XDEBUG_REMOTE_HOST:-"127.0.0.1"}
ENV PHP_XDEBUG_REMOTE_PORT ${PHP_XDEBUG_REMOTE_PORT:-9000}
ENV PHP_XDEBUG_REMOTE_AUTO_START ${PHP_XDEBUG_REMOTE_AUTO_START:-1}
ENV PHP_XDEBUG_REMOTE_CONNECT_BACK ${PHP_XDEBUG_REMOTE_CONNECT_BACK:-1}
ENV PHP_XDEBUG_IDEKEY ${PHP_XDEBUG_IDEKEY:-docker}
ENV PHP_XDEBUG_PROFILER_ENABLE ${PHP_XDEBUG_PROFILER_ENABLE:-0}
ENV PHP_XDEBUG_PROFILER_OUTPUT_DIR ${PHP_XDEBUG_PROFILER_OUTPUT_DIR:-"/tmp"}

LABEL Maintainer="Zaher Ghaibeh <z@zah.me>" \
  Description="Lightweight php 7.1 container based on alpine with xDebug enabled, SOPAP extensions enabled & composer installed." \
  org.label-schema.name="zaherg/php-7.1-xdebug-alpine" \
  org.label-schema.description="Lightweight php 7.1 container based on alpine with xDebug enabled, SOPAP extensions enabled & composer installed." \
  org.label-schema.build-date=$BUILD_DATE \
  org.label-schema.vcs-url="https://github.com/linuxjuggler/php-7.1-xdebug-alpine.git" \
  org.label-schema.vcs-ref=$VCS_REF \
  org.label-schema.schema-version="1.0.0"

RUN apk update \
  && apk add --no-cache git mysql-client curl openssh-client icu libpng libjpeg-turbo libmcrypt libmcrypt-dev pwgen\
  && apk add --no-cache --virtual build-dependencies icu-dev \
  libxml2-dev freetype-dev libpng-dev libjpeg-turbo-dev g++ make autoconf \
  && docker-php-source extract \
  && pecl install xdebug redis \
  && docker-php-ext-enable xdebug redis \
  && docker-php-source delete \
  && docker-php-ext-install mcrypt pdo_mysql soap intl zip \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
  && apk del build-dependencies \
  && apk del libmcrypt-dev \
  && rm -rf /tmp/*

COPY xdebug.ini /usr/local/etc/php/conf.d/xdebug-dev.ini
# ADD ./php.ini /etc/php/7.1/fpm/conf.d/90-php.ini
# ADD ./php.ini /etc/php/7.1/cli/conf.d/90-php.ini

EXPOSE 9000

USER 1000

CMD ["php-fpm"]
