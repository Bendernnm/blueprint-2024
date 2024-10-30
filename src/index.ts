import * as dotenv from 'dotenv';
import server from './http/server';

dotenv.config();

server();
