FROM node:20-alpine
WORKDIR /app

# 1. Install production dependencies for server
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --production

# 2. Copy entire game codebase (frontend + backend)
WORKDIR /app
COPY . .

# 3. Launch unified server
WORKDIR /app/server
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]

