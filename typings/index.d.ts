import 'egg';

declare module 'egg' {
    interface Application {
        mysql: any,
        cassandra: any,
    }
}