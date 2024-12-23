FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Rebuild bcrypt
RUN npm rebuild bcrypt


# Copy the application code
COPY . .
# Expose the port the app runs on
EXPOSE 5050

# Start the server
CMD ["npm", "start"]
