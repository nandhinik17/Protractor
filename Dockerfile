FROM node:18

RUN npm install -g protractor
RUN npm install -g webdriver-manager

RUN webdriver-manager update

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4444

CMD ["protractor", "conf/conf.js"]
