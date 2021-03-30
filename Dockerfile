FROM node:alpine

COPY . /nagibabel.js
RUN cd /nagibabel.js && npm install --ignore-scripts
ENTRYPOINT ["/nagibabel.js/bin/nagibabel.js", "--path"]
