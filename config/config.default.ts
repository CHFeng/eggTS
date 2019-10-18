import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570592154724_9120';

  // add your egg config in here
  config.middleware = [ 'myMiddleware' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,

    myMiddleware: {
      name: 'myTestMiddleware',
      value: 10,
    },

    cassandra: {
      client: {
        host: '127.0.0.1',
        port: 9042,
        localDataCenter: 'datacenter1',
        keyspace: 'mycasdb',
      },
    },

    hello: {
      client: {
        name: 'daniel',
        text: 'plugin Test',
      },
    },

    mysql: {
      client: {
        host: 'mysql.com',
        port: '3306',
        user: 'test_user',
        password: 'test_password',
        database: 'test',
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
