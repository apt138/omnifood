# Pull base image
FROM node:22-alpine

# Setting Workdirectory
WORKDIR /code

# install dependencies
COPY package*.json /code/
RUN npm install

# Copy Project
COPY . .