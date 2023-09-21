import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import connect from './connect';
import { productRouter } from './routers/product.router';
import { userRouter } from './routers/user.router';
import dotenv from "dotenv";
import { adminRouter } from './routers/admin.router';
import { CurrentUser, verifyToken } from './middleware/auth';
import { healthRouter } from './routers/health.router';
import morgan from 'morgan';
import { logger } from './logger';


declare global {
  namespace Express {
      interface Request {
          user: CurrentUser
      }
  }
}


export const app = express();
app.use(morgan('tiny'));

dotenv.config();

const port = process.env.API_PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const { MONGO_URI } = process.env;
if (!MONGO_URI) {
  logger.error("Please provide DataBase URI to connect. exiting now...");
  process.exit(1);
}

connect({db: MONGO_URI});

app.use('/', adminRouter);

app.use('/api', verifyToken);

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/health', healthRouter);


// Graceful shutdown
const server = app.listen(port, () =>
  logger.info(`Application started successfully on port ${port}.`)
);

let connections: any[] = [];

server.on('connection', connection => {
  connections.push(connection);
  connection.on('close', () => 
  connections = connections.filter((currentConnection) => currentConnection !== connection));
});

function shutdown() {
  logger.debug('Received kill signal, shutting down gracefully');
  
  server.close(() => {
    logger.debug('Closed out remaining connections');
    process.exit(0);
  });

  setTimeout(() => {
    logger.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 20000);

  // end current connections
  connections.forEach((connection) => connection.end());
  
  // then destroy connections
  setTimeout(() => {
    connections.forEach((connection) => connection.destroy());
  }, 10000);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);


