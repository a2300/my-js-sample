import { Request, Response, NextFunction } from 'express'; 
import * as userDatabase from '../repositories/user-repository'
const HEADER_NAME = 'x-user-id'; 

const headerCheckMiddleware = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const headerValue: string = (req.headers[HEADER_NAME.toLowerCase()]) as string; // Headers are case-insensitive
    const user = await userDatabase.findOne(headerValue);    
    
    if (headerValue && headerValue && user) {
        next(); // Continue to the next middleware or route handler
    } else {
      res.status(401).json({
         data:null,
         error: { message: 'Header x-user-id is missing or no user with such id' } 
        }); // Respond with an unauthorized status
    }
  };
};

export default headerCheckMiddleware;