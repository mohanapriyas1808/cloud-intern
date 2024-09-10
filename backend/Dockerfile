# Use Node.js base image
FROM node:16-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire backend code to the container
COPY . .

# Expose the port on which the backend server will run
EXPOSE 5000

# Command to run the server
CMD ["node", "server.js"]
