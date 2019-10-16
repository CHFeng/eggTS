import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.logger.info('param test:' + ctx.params.id);
    ctx.body = await ctx.service.test.sayHi(`egg test ${ctx.params.id}`);
  }
}
