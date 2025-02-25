# Node.js 18 をベースイメージとして使用
FROM node:18

# ワークディレクトリを作成
WORKDIR /app

# 依存関係をインストール (package.json と package-lock.json が存在する場合)
COPY package*.json ./
RUN npm install

# ポート 3000 を公開 (Next.js のデフォルトポート)
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]