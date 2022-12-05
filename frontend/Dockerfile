FROM node:14.15.1-alpine as build

WORKDIR /srv/app/frontend

# Append node modules path to container path
ENV PATH ./node_module/.bin:$PATH

# Copy depenedencies and configuration to react working directory
COPY package.json package-lock.json ./

ARG NODEVERSION=14.15.1

# Install npm dependencies
RUN npm cache clean -f && \
    npm install -g && \
    npm install @babel/eslint-parser

# Build app for development
RUN rm -rf build
RUN npm build


# Copy all react files to docker working directory
COPY . ./
# Copy entrypoint.sh to app directory
COPY ./entrypoint.sh .

# Expose running port for react app
EXPOSE 3000
