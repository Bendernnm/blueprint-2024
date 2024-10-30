import express from 'express';
import * as core from "express-serve-static-core";

export default (): core.Express => {
    const app = express();

    return app;
};
