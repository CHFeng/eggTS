import { Controller } from 'egg';

export default class CalController extends Controller {
  add() {
    const { ctx, app } = this;
    const result = ctx.service.cal.add(parseInt(ctx.query.one, 10), parseInt(ctx.query.two, 10));
    ctx.logger.info('1 add page: ' + result);
    ctx.coreLogger.info('2 add page: ' + result);
    app.logger.info('3 add page: ' + result);
    app.coreLogger.info('4 add page: ' + result);
    app.logger.info('env: ' + app.config.env);
    ctx.body = `Hi this is add page, the answer of ${ctx.query.one} and ${ctx.query.two} is ${result}`;
  }

  sub() {
    const { ctx } = this;
    const result = ctx.service.cal.sub(parseInt(ctx.query.one, 10), parseInt(ctx.query.two, 10));
    ctx.body = `Hello this is Subtraction page, the answer of ${ctx.query.one} and ${ctx.query.two} is ${result}`;
  }

  mul() {
    const { ctx } = this;
    const result = ctx.service.cal.mul(parseInt(ctx.query.one, 10), parseInt(ctx.query.two, 10));
    ctx.body = `你好 this is multiply page, the answer of ${ctx.query.one} and ${ctx.query.two} is ${result}`;
  }

  async query() {
    const { ctx } = this;
    const result = await ctx.service.cal.query();
    ctx.body = result;
  }
}
