# Полноценное использование БД

В [примере](../ex11/) мы подключили БД. И даже заполнили ее. Но при перезапуске контейнера все данные потерялись. Такое поведение было описано в [нулевом примере](../ex0/).

Обычно мы хотим все же сохранения данных в БД даже после перезапуска контейнера.

## Рецепт
В файле `docker-compose.yml` изменяем секцию с описанием контейнера следующим образом:
```
mongo:
  image: mongo:3.6-stretch
  volumes:
    - ./data/mongo:/data/db
  networks:
    - skynet
```
Теперь БД будет сохраняться и при перезапуске контейнера.

## Итоговый файл docker-compose.yml
```
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
    volumes:
      - ./data/mongo:/data/db
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
