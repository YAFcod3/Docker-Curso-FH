# /app /usr /lib   estas son fol dres inside container
FROM node:18-alpine3.18

#cd app
WORKDIR /app

#Dest q se copio a /app (./)
COPY app.js package.json ./

#instalar las dependencias
RUN npm install

#comando run de la imagen
CMD ["node","app.js" ]


#??buenas practicas : poner lo q menos cambia arriba
#?? construir 
#docker build --tag cron-ticker .
#?? reconstruir debo tener algunas consideraciones para optimizar

#!! cada vez q hay q hay un nuevo tag el id de la imagen es diferente si hubo algunn cambio