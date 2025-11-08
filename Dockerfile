FROM node:22.16.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5796

CMD ["npm", "run", "preview"]

# docker build . -t "bala-frontend:v1.0"
# docker images

# docker run -p 5796:5796 bala-frontend:v1.0
# docker ps

# docker stop bala-frontend:v1.0

# docker rm bala-frontend:v1.0
# docker rmi bala-frontend:v1.0
# or
# docker system prune -a