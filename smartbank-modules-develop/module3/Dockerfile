# downloading node image , like docker pull node
FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# adding envrionment variables
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# installing dependencies
RUN npm install --silent
RUN npm install react-scripts -g --silent

# add app
# copying current location to WORKDIR but ignore contents in .dockerignore
COPY . ./

# expose port 3000
EXPOSE 300

# start app
CMD ["npm", "start"]