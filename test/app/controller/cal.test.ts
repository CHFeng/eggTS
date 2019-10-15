import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/cal.test.ts', () => {
  it('should GET /cal/add', async () => {
    const result = await app.httpRequest().get('/cal/add?one=1&two=2').expect(200);
    assert(result.text === 'Hi this is add page, the answer of 1 and 2 is 3');
  });

  it('should GET /cal/sub', async () => {
    const result = await app.httpRequest().get('/cal/sub?one=1&two=2').expect(200);
    assert(result.text === 'Hello this is Subtraction page, the answer of 1 and 2 is -1');
  });

  it('should GET /cal/mul', async () => {
    const result = await app.httpRequest().get('/cal/mul?one=1&two=2').expect(200);
    assert(result.text === '你好 this is multiply page, the answer of 1 and 2 is 2');
  });
});
