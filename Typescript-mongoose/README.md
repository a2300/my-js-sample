
https://rsbh.dev/blogs/rest-api-with-express-typescript
```bash
C:\dev\my2\my-nodejs> docker-compose up -d

C:\dev\my2\my-nodejs> npm init -y
C:\dev\my2\my-nodejs>npm install -D typescript
C:\dev\my2\my-nodejs> npm i -D @types/express @types/node
C:\dev\my2\my-nodejs> npm install mongoose
```
Adding tsconfig.json
```json
{
    "compilerOptions": {
      "module": "commonjs",
      "target": "es2020",
      "moduleResolution": "node",
      "declaration": true,
      "outDir": "./dist",
      "esModuleInterop": true,
      "strict": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "sourceMap": true
    },
    "include": ["./app"],
    "exclude": ["node_modules"]
}
```
Links:
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
https://mongoosejs.com/docs/typescript.html
https://javascript.plainenglish.io/using-mongoose-with-typescript-cc1804d7e472

https://github.com/fedosejev/restful-api-express-mongoose/blob/master/routers/item.js
https://github.com/pdamer/nodejs-express-mongoose-demo/blob/master/app/controllers/articles.js
https://github.com/do-community/nodejs-mongo-mongoose/blob/master/controllers/sharks.js

https://www.digitalocean.com/community/tutorials/how-to-integrate-mongodb-with-your-node-application
https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2

https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
https://github.com/tomanagle/Mongoose-TypeScript-example/blob/master/src/controllers/pet.controller.ts
