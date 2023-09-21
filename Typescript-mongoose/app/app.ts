import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import connect from './connect';
import { productRouter } from './routers/product.router';
import { userRouter } from './routers/user.router';

export const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const db = 'mongodb://user:password@localhost:27017/admin';
connect({db});

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
);

app.use('/products', productRouter);
app.use('/users', userRouter);


app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
);



