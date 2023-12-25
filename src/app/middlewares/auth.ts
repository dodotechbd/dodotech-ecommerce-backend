import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../config';
import { UserRole } from '../../enums';
import ApiError from '../../errors/ApiError';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (requiredRoles.length && requiredRoles.includes(UserRole.ADMIN)) {
        const headers = req.headers;
        const body = req.body;
        if (![headers?.key, body?.key].includes(config.secret_api_key))
          throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
