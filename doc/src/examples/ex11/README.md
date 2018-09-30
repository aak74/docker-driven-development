# Добавляем БД

Редкий проект обходится без БД. Давайте подключим в наш проект БД.

::: warning Предупреждение
Не использовать до ознакомления с двумя следующими примерами
:::

## Рецепт
1. В файл `docker-compose.yml` добавляем в секцию `services` раздел с описанием контейнера (4 строки).
    ```yaml
    mysql:
      image: mysql:8
      networks:
        - skynet
    ```
1. Восстанавливаем БД из бэкапа.
1. В исходниках указываем данные для подключения к БД.
1. Запускаем в консоли:
    ```
    docker-compose up --build -d
    ```
1. Открываем в браузере страницу с адресом: http://localhost

## Итоговый файл docker-compose.yml
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
  mysql:
    image: mysql:8
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
