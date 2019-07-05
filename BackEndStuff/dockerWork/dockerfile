from node:10.2

WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .

EXPOSE 3000

CMD node index.js

//docker run -it --rm ubuntu bash

//docker build -t myapp .

//docker ps -a

//docker run -it --rm -p 8080:3000 myapp


