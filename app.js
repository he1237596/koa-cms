/*
 * @Author: Chris
 * @Date: 2021-01-04 19:01:15
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-04 20:17:12
 * @Descripttion: **
 */
const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path');
const router = require('koa-router')();

const api = require('./routes/api');
const admin = require('./routes/admin');
const index = require('./routes/index');

const app = new Koa();
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});
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