# Use Node.js 22 base image
FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache bash curl nano

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]

