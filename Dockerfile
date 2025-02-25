FROM node:20-alpine

WORKDIR /nextjs

COPY . .

RUN npm install
RUN npm run build

# Git をインストール
RUN apk add --no-cache git

CMD ["npm", "run", "dev"]
