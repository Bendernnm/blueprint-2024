import { Request, Response } from 'express';

export const versionRoute = (req: Request, res: Response) => {
    res.status(200).json({ version: '1.0.0' });
};
