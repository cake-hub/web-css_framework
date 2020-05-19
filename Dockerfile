FROM node:10
#RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm config set unsafe-perm true
RUN npm install --quiet node-gyp -g
WORKDIR /var/www/html
COPY ./Container .
ENV HOST 0.0.0.0
EXPOSE 2020
CMD ["npm", "start"]
