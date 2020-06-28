FROM node

WORKDIR /src

ENV PATH /src/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install --slient

COPY . ./
CMD ["npm", "start"]
