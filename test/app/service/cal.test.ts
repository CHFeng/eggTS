import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/cal.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('add', async () => {
    const result = await ctx.service.cal.add(1, 2);
    assert(result === 3);
  });

  it('sub', async () => {
    const result = await ctx.service.cal.sub(1, 2);
    assert(result === -1);
  });

  it('multiply', async () => {
    const result = await ctx.service.cal.mul(1, 2);
    assert(result === 2);
  });
});
