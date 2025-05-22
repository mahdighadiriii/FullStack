#!/bin/bash

cd src &&
python3 manage.py makemigrations &&
python3 manage.py migrate &&
python3 manage.py collectstatic --noinput
gunicorn core.asgi:application -w 2 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
