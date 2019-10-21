import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /home', async () => {
    const result = await app.httpRequest().get('/home').expect(200);
    assert(result.text === 'hi, egg test home\ndaniel say:I am the king of the world!');
  });
});
