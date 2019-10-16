// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMyMiddleware from '../../../app/middleware/myMiddleware';

declare module 'egg' {
  interface IMiddleware {
    myMiddleware: typeof ExportMyMiddleware;
  }
}
