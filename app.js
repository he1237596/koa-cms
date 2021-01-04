/*
 * @Author: Chris
 * @Date: 2021-01-04 19:01:15
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-04 19:36:59
 * @Descripttion: **
 */
const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path');

const app = new Koa();
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});
app.use(async (ctx, next) => {
  await ctx.render('index')
})
app.listen(3000);