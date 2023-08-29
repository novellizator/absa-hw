# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory within the container
WORKDIR /app

# Copy the rest of the frontend application code to the container
COPY packages/frontend .

# Install app dependencies
RUN yarn install

# Build the React app
RUN yarn build

# Expose the port your frontend app will run on
EXPOSE 3000

# Command to run the frontend app
CMD ["yarn", "start"]