// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCal from '../../../app/service/cal';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    cal: ExportCal;
    test: ExportTest;
  }
}
