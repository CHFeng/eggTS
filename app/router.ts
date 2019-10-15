import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/cal/add', controller.cal.add);
  router.get('/cal/sub', controller.cal.sub);
  router.get('/cal/mul', controller.cal.mul);
};
