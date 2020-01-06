docker pull daocloud.io/library/mongo:2.7.6


docker run -p 27017:27017 -v $PWD/db:/data/db -d --name mongodb 18400f87db91
docker run -p 27017:27017 -d --name mongodb 18400f87db91

docker -d --name nodeapp --link=mongodb:mongodb -p 3001:3001 node --name



docker rm $(docker ps -a -q)