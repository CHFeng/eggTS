import { EggPlugin } from 'egg';
import * as Path from 'path';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql: {
    enable: false,
    package: 'egg-mysql',
  },
  cassandra: {
    enable: true,
    path: Path.join(__dirname, '../lib/plugin/egg-cassandra'),
  },
};

export default plugin;
