import { logger } from '@config/logger';
import { Request, Response } from 'express';
import { generatePdf } from 'html-pdf-node';

export const HomeController = {
  index(_req: Request, res: Response): void {
    res.render('home');
  },

  pdf(req: Request, res: Response): void {
    const route = req.query['route'] || ''
    const file = {
      url: `http://localhost:1337/${route}`,
    };
    const options = {
      format: 'A4',
    };
    generatePdf(file, options).then((buffer: Buffer) => {
      logger.info('Sending file');
      res.setHeader('Content-Length', buffer.byteLength);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=home.pdf');
      return res.send(buffer);
    });
  },
};
