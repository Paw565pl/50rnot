FROM python:3.12-slim

WORKDIR /backend

RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY . .

RUN adduser --disabled-password appuser && chown -R appuser /backend
USER appuser

EXPOSE 8000

CMD fastapi run server.py
