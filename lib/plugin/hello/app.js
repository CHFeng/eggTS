'use strict';

const assert = require('assert');

let name;
// egg-hello/app.js
module.exports = app => {
  // 第一个参数 hello 指定了挂载到 app 上的字段，我们可以通过 `app.createhello` 访问到 hello singleton 实例
  // 第二个参数 createhello 接受两个参数(config, app)，并返回一个 createhello 的实例
  app.addSingleton('hello', createhello);
};

function say(text) {
  return `${name} say:${text}`;
}
/**
 * @param  {Object} config   框架处理之后的配置项，如果应用配置了多个 hello 实例，会将每一个配置项分别传入并调用多次 createhello
 * @param  {Application} app 当前的应用
 * @return {Object}          返回创建的 hello 实例
 */
function createhello(config, app) {
  assert(config.name && config.text);
  console.log('[egg-hello] name: %s: say:%s', config.name, config.text);
  app.coreLogger.info('[egg-hello] name: %s: say:%s', config.name, config.text);
  name = config.name;

  const client = {
    name: config.name,
    say: say,
  };

  return client;
}