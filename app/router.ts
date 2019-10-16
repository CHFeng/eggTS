import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const myMiddleware = app.middleware.myMiddleware({ name: 'single middleware', value: 0 }, app);
  router.get('/', controller.home.index);

  router.get('/cal/add', myMiddleware, controller.cal.add);
  router.get('/cal/sub', controller.cal.sub);
  router.get('/cal/mul', controller.cal.mul);
};
