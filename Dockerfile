FROM node:latest

WORKDIR /app

COPY . .

RUN npm install --verbose
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]