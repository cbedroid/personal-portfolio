FROM node:14.15.1-alpine

WORKDIR /srv/app/frontend

# Copy depenedencies and configuration to react working directory
COPY package.json package-lock.json ./


# Install npm  dependencies
ARG NODEVERSION=14.15.1
RUN npm cache clean -f && \
    npm install -g && \
    npm install @babel/eslint-parser


# Copy all react files to docker working directory
COPY . ./

# Copy entrypoint.sh to app directory
COPY ./entrypoint.sh .

# Expose running port for react app
EXPOSE 3000

# Append node modules path to container path
ENV PATH ./node_module/.bin:$PATH


# Run entrypoint.sh
#ENTRYPOINT ["sh","/srv/app/frontend/entrypoint.sh"]
