FROM python:3.8.3-slim-buster as base

# Create App directory
ENV APP_HOME=/srv/app/backend
RUN mkdir -p $APP_HOME && \
    mkdir -p $APP_HOME/static && \
    mkdir -p $APP_HOME/media

# Set current working directory for app
WORKDIR /srv/app/backend

# copy requirements.txt to app directory
COPY ./requirements.dev.txt .

# Copy entrypoint.sh to app directory
COPY ./entrypoint.sh .

# copy project to app directory
COPY . .

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install linux dependencies
RUN apt-get update && apt-get install --no-install-recommends -y \
  apt-utils \
  netcat \
  postgresql-client \
  libpq-dev \
  gcc \
  redis-server \
  libjpeg-dev && \
  apt-get autoremove -y gcc


# Install django dependencies
RUN pip install --upgrade pip && \
   pip install -r requirements.dev.txt --no-cache-dir

# Run entrypoint.sh
ENTRYPOINT ["sh","/srv/app/backend/entrypoint.sh"]
