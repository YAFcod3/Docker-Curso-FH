
FROM node:18-alpine3.18 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:18-alpine3.18 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build



FROM ngnix:1.23.3 as prod 
EXPOSE 80
#copiar la carpeta de ditribucion en la carpeta html de ngnix 
COPY --from=builder /app/dist /usr/share/nginx/html  
COPY assets/ /usr/share/nginx/html/assets        
RUN rm /etc/nginx/conf.d/default.conf 
COPY nginx/nginx.conf /etc/nginx/conf.d/
CMD [ "nginx","-d","daemon off;" ]



#! docker build -t heroes-app . --no-cache

# docker container run -p 80:80 heroes-app