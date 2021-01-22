/*
 * @Author: Chris
 * @Date: 2021-01-04 19:01:15
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-09 15:51:26
 * @Descripttion: **
 */
// const util = require('util')
// const fs = require('fs')
// util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(data=>{console.log(data.name)}).catch(err=>{console.log(err)})
// async function init() {
//   try {
//     let data = await util.promisify(fs.readFile)('./package.json');
//     data = JSON.parse(data);
//     console.log(data.name)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path');
const router = require('koa-router')();
const onerror = require('koa-onerror')
const logger = require('koa-logger');
const static = require('koa-static');
const api = require('./routes/api');
const admin = require('./routes/admin');
const index = require('./routes/index');

const app = new Koa();

onerror(app);
app.use(static(__dirname +'/public'));

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});
app.use(logger());
app.use(async (ctx, next) => {
  // await ctx.render('index')
  next();
})
router.use('/api',api)
router.use('/admin',admin)
router.use('/',index)
app.use(router.routes(), router.allowedMethods())
app.listen(3000,()=>{
  console.log('服务启动: 3000')
});