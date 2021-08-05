#FROM node:14-alpine
#
#LABEL maintainer="tinhhn@meeyland.com"
#
#WORKDIR /usr/src/app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . ./
#
#EXPOSE 3334
#
##ENV HOST=0.0.0.0
##ENV PORT=3334
#
#RUN npm run build
#
#CMD [ "npm", "run", "start" ]

FROM node:14-alpine

LABEL maintainer="tinhhn@meeyland.com"

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 3334

ENV HOST=0.0.0.0
#ENV PORT=3334

RUN yarn build

CMD [ "yarn", "start" ]
