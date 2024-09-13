# Use the official Node.js image
FROM node:18-slim

# Install Protractor and Selenium WebDriver
RUN npm install -g protractor
RUN npm install -g webdriver-manager --f

# Set up Protractor
RUN webdriver-manager update --f

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (not needed in this case but good practice)
EXPOSE 4444

# Run Protractor tests
CMD ["protractor", "conf/conf.js"]
