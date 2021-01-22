/*
 * @Author: Chris
 * @Date: 2021-01-05 19:19:05
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-05 19:58:11
 * @Descripttion: **
 */
const config = require('./config'),
      MongoClient = require('mongodb').MongoClient;

class Db {
  static getInstance(){
    if(!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }

  constructor(){
    this.dbClient = '';
    this.connect();
  }
  connect(){
    const _that = this;
    return new Promise((resolve, reject)=>{
      if(!_that.dbClient) {
        MongoClient.connect(config.url, (err, client)=>{
          if(err) {
            reject(err);
            return;
          }
          _that.dbClient = client.db(config.dbName);
          resolve(_that.dbClient);
        })
      }else{
        resolve(_that.dbClient);
      }
    })
  }
  find(collectionName, json){
    const _that = this;
    return new Promise((resolve, reject) => {
      _that.connect().then(db=>{
        db.collection(collectionName).find(json).toArray((err, docs) => {
          if(err){
            reject(err);
            return;
          }
          resolve(docs)
        });
      })
    })
  }
  update(collectionName, json){
    
  }
  insert(collectionName, json){
    
  }
  remove(collectionName, json){
    
  }
}

module.exports = Db.getInstance();