import { Request } from 'express';
import url from 'url';

export const fullUrl = (req: Request): string =>
  url.format({
    protocol: 'https',
    host: req.get('host'),
    pathname: req.originalUrl,
  });

export const baseUrl = (req: Request, pathname?: string) =>
  url.format({
    protocol: 'https',
    host: req.get('host'),
    pathname,
  });
