import { Context, EggAppConfig, Application } from 'egg';

// 这里是你自定义的中间件
export default function myMiddleware(options: EggAppConfig['myMiddleware'], app: Application): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 你可以获取 config 的配置：
    const config = ctx.app.config;
    // config.xxx....
    app.logger.info('variable from default config:' + config.myMiddleware.name);
    app.logger.info('enter ' + options.name);
    app.logger.info('value:' + options.value);
    options.value++;
    await next();
    app.logger.info('exit ' + options.name);
    app.logger.info('value:' + options.value);
  };
}
