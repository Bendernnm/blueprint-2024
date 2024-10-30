import {Request, Response} from 'express';

export const rootRoute = (req: Request, res: Response) => {
    res.status(200).send('Root route');
};
