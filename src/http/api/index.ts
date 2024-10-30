import express from 'express';
import * as core from 'express-serve-static-core';
import { rootRoute } from './root';
import { versionRoute } from './version';
import { healthcheckRoute } from './healthcheck';

export default (): core.Express => {
    const app = express();

    app.get('/', rootRoute);
    app.get('/version', versionRoute);
    app.get('/healthz', healthcheckRoute);

    return app;
};
