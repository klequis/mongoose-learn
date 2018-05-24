'use strict'

module.exports = {
    name: 'rest-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://klequis:Sn0wm@n01@cluster0-shard-00-00-uelae.mongodb.net:27017,cluster0-shard-00-01-uelae.mongodb.net:27017,cluster0-shard-00-02-uelae.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    }
}


 // uri: 'mongodb://$USERNAME:$PASSWORD@
 // free-shard-00-00-example.mongodb.net:27017,
 // free-shard-00-01-example.mongodb.net:27017,
 // free-shard-00-02-example.mongodb.net:27017/api?
 // ssl=true&replicaSet=free-shard-0&authSource=admin'
