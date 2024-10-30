import http from 'http';
import express from 'express';
import CONFIG from "../config";


export default () => {
    const app = express();
    const server = http.createServer(app);

    server.listen(CONFIG.PORT, CONFIG.HOST, () => {
        console.log('Server is running on http://%s:%d', CONFIG.HOST, CONFIG.PORT);
    });
};
