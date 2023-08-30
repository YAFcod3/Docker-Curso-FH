#! etapa 1 Instalar dependencias
FROM node:18-alpine3.18 as deps 
WORKDIR /app
COPY package.json ./
RUN npm install


#! etapa 2 Testear y construir
FROM node:18-alpine3.18 as builder 
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

#! etapa 3 Dependencias de produccion
FROM node:18-alpine3.18 as prod-deps
WORKDIR /app
COPY  package.json . 
RUN npm install --prod

#! etapa 4 ejecutar la app
FROM node:18-alpine3.18 as  runner
WORKDIR /app
COPY  --from=prod-deps /app/node_modules/ ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node","app.js" ]



#?
# build y push #?normal:
#! docker build -t klerith/cron-ticker .
# o un tag en especifico
#! docker build -t klerith/cron-ticker:gato .
#! docker push klerith/cron-tiker:gato 

#buildx build y push #?multiplataforma :
#! docker buildx ls
#! docker buildx create --name mybuilder --driver docker-container --bootstrap mybuilder
#! docker buildx use mybuilder
#! docker buildx build --platform linux/amd64 , linux/arm64 -t  klerith/cron-ticker:gato --push .