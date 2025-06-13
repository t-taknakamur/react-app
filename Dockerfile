# 1. ベースイメージ
FROM node:20-alpine

# 2. 作業ディレクトリ
WORKDIR /app

# 3. 依存関係インストール
COPY package*.json ./
RUN npm install

# 4. アプリケーションコードをコピー
COPY . .

# 5. 開発サーバー起動（外部アクセス許可）
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

