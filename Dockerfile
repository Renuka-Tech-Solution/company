# Use an official Ubuntu runtime as a parent image
FROM ubuntu:latest

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y nodejs npm

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 80

# Specify the command to run on container start
CMD ["npm", "start"]
