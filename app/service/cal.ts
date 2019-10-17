import { Service } from 'egg';
// import { Client } from 'cassandra-driver';

export default class CalApi extends Service {
    public add(para1: number, para2: number): number {
        const { ctx } = this;
        ctx.logger.info('in service/cal');
        return para1 + para2;
    }

    public sub(para1: number, para2: number): number {
        return para1 - para2;
    }

    public mul(para1: number, para2: number) {
        return para1 * para2;
    }

    async query() {
        const { app } = this;
        const query = 'SELECT * FROM user';
        // const db = new Client({ contactPoints: [ '127.0.0.1' ], localDataCenter: 'datacenter1', keyspace: 'mycasdb' });
        // db.connect();
        const dbresult = await app.cassandra.execute(query);
        // db.shutdown();
        let field = '<h1>query content:</h1><ul>';

        dbresult.rows.map(content => {
          app.logger.info(content);
          field += `<li>id: ${content.id} user_name: ${content.user_name}</li>`;
        });

        field += '</ul>';

        return field;
    }
}
