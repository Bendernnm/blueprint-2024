import { Request, Response } from 'express';

export const healthcheckRoute = (req: Request, res: Response) => {
    res.status(200).send('healthz');
};
