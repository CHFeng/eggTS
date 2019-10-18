import 'egg';
import { Hello } from "../lib/plugin/hello";

declare module 'egg' {
    interface Application {
        mysql: any,
        cassandra: any,
        hello: Hello,
    }
}