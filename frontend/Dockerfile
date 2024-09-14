# Stage 1: Build React app
FROM node:16 AS build

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire frontend code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port on which nginx will serve the React app
EXPOSE 80

