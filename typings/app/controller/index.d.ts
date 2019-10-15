// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCal from '../../../app/controller/cal';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    cal: ExportCal;
    home: ExportHome;
  }
}
