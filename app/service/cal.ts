import { Service } from 'egg';

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

    // public div(para1: number, para2: number) {
    //     return para1 / para2;
    // }
}
