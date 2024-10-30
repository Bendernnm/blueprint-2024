import http from 'http';
import app from './api';
import CONFIG from "../config";

export default (): void => {
    const server = http.createServer(app());

    server.listen(CONFIG.PORT, CONFIG.HOST, () => {
        console.log('Server is running on http://%s:%d', CONFIG.HOST, CONFIG.PORT);
    });
};
