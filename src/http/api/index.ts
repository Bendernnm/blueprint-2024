import express from 'express';
import * as core from 'express-serve-static-core';
import { rootRoute } from './root';
import { versionRoute } from './version';

export default (): core.Express => {
    const app = express();

    app.get('/', rootRoute);
    app.get('/version', versionRoute);

    return app;
};
