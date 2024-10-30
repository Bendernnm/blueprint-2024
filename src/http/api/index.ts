import express from 'express';
import * as core from "express-serve-static-core";
import {rootRoute} from "./root";

export default (): core.Express => {
    const app = express();

    app.get('/', rootRoute);

    return app;
};
