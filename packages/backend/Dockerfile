# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory within the container
WORKDIR /app

# Copy the rest of the backend application code to the container
COPY packages/backend .

# Install app dependencies
RUN yarn install

# Expose the port your backend app will run on
EXPOSE 3000

# Command to run the backend app
CMD ["yarn", "start"]