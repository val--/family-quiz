FROM node:20

USER node

WORKDIR /application

COPY --chown=node:node package.json package-lock.json ./

RUN npm install

COPY --chown=node:node . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]