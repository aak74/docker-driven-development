# Запуск простого проекта на локальном компьютере

Для запуска проекта на локальном компьютере часто бывает достаточно запуска встроенного веб-сервера.
Однако, такое сработает только при очень простых случаях.

## Рецепт
1. Создаем файл `docker-compose.yml`:
    ```dockerfile=
    version: '2'

    services:
      server:
        image: node:8-alpine
        ports:
          - 3000:3000 
        networks:
          - skynet
      mongo:
        image: mongo:3.6-stretch
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
1. Запускаем в консоли:
    ```
    docker-compose up --build -d
    ```
1. Открываем в браузере страницу с адресом: http://localhost:3000
