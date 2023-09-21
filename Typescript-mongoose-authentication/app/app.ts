import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import connect from './connect';
import { productRouter } from './routers/product.router';
import { userRouter } from './routers/user.router';
import dotenv from "dotenv";
import { adminRouter } from './routers/admin.router';
import { CurrentUser, verifyToken } from './middleware/auth';

declare global {
  namespace Express {
      interface Request {
          user: CurrentUser
      }
  }
}


export const app = express();

dotenv.config();

const port = process.env.API_PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const { MONGO_URI } = process.env;
if (!MONGO_URI) {
  console.log("Please provide DataBase URI to connect. exiting now...");
  process.exit(1);
}

connect({db: MONGO_URI});

app.use('/', adminRouter);

app.use('/api', verifyToken);

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);


app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
);



