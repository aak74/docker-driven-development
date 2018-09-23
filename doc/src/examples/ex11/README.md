# Добавляем БД

Редкий проект обходится без БД. Давайте подключим в наш проект БД.

::: warning Предупреждение
Не использовать до ознакомления с двумя следующими примерами
:::

## Рецепт
1. В файл `docker-compose.yml` добавляем в секцию `services` раздел с описанием контейнера (4 строки).
    ```
    mongo:
      image: mongo:3.6-stretch
      networks:
        - skynet
    ```
1. В исходниках указываем данные для подключения к БД.
1. Запускаем в консоли:
    ```
    docker-compose up --build -d
    ```
1. Открываем в браузере страницу с адресом: http://localhost:3000

## Итоговый файл docker-compose.yml
```yaml
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
