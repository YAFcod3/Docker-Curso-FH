# /app /usr /lib   estas son fol dres inside container
FROM node:18-alpine3.18

#cd app
WORKDIR /app

#Dest q se copio a /app (./)
COPY package.json ./
#instalar las dependencias
RUN npm install
#copiar lo restante
COPY . .
#realizar el  testing
#poner  el scrip en el package json paq funcione la linea d abajo
RUN npm run test     
#eliminar archivos y directorios no necesarios en poroduccion
RUN rm -rf tests &&  rm -rf node_modules
#instalar las dependencias de produccion
RUN npm install --prod
#comando run de la imagen
CMD ["node","app.js" ]


