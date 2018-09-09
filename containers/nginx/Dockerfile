FROM nginx:latest

LABEL maintainer="Andrew Kopylov <aa74ko@gmail.com>"

RUN apt-get update \
  && apt-get install --no-install-recommends --no-install-suggests -y \
  curl netcat

COPY ./rootfs /
