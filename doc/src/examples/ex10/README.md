# Запуск простого проекта на локальном компьютере

Для запуска проекта на локальном компьютере часто бывает достаточно запуска встроенного веб-сервера.
Однако, такое сработает только при очень простых случаях.

## Рецепт
1. Создаем файл `docker-compose.yml`:
    ```yaml
    version: '2'

    services:
      server:
        image: php:7-apache
        ports:
          - 80:80
        volumes:
          - ./src:/var/www/html
        networks:
          - skynet

    networks:
      skynet:
        driver: bridge
        ipam:
          driver: default
          config:
            - subnet: 10.1.0.1/24      
    ```
1. В папку сурс помещаем файлы проекта:
1. Запускаем в консоли:
    ```
    docker-compose up --build -d
    ```
1. Открываем в браузере страницу с адресом: http://localhost
