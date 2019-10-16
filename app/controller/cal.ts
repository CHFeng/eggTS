import { Controller } from 'egg';
import { Client } from 'cassandra-driver';

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
    const { ctx, app } = this;
    const db = new Client({ contactPoints: [ '127.0.0.1' ], localDataCenter: 'datacenter1', keyspace: 'mycasdb' });
    const query = 'SELECT * FROM user';
    const dbresult = await db.execute(query);
    app.logger.info(dbresult);
    let field = '';

    dbresult.rows.map(content => {
      app.logger.info(content);
      field += `id: ${content.id} user_name: ${content.user_name}`;
    });

    ctx.body = `query content: ${field}`;
  }
}
