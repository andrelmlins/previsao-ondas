FROM node

RUN mkdir -p /api
WORKDIR /api

COPY package.json /api
RUN yarn install --production
RUN yarn global add pm2

COPY . /api

EXPOSE 80
CMD [ "yarn", "start-prod" ]