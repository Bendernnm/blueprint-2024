import {IConfig} from "../interfaces/config";

export default {
    PORT: +(process.env.PORT || 3000),
    HOST: process.env.HOST || 'localhost',
} as IConfig;
