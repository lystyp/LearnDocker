# This is a comment
FROM node:latest
MAINTAINER Daniel <daniel_shi@asd.com>
RUN cd /
ADD HelloWorld.js /
EXPOSE 8888
CMD ["node", "HelloWorld.js"]
