FROM node:20

# USER node
USER root

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN chown -R node:node /app/node_modules

COPY --chown=node:node . .

USER node

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]