
https://rsbh.dev/blogs/rest-api-with-express-typescript
```bash
docker run -d -p 27017:27017 --name lab-api-mongo mongo:latest

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

https://duncanlew.medium.com/unit-testing-typescript-with-jest-part-one-f39d2392d0f4

Building a Production - Ready Node.js App with TypeScript and Docker
https://www.cloudnweb.dev/2019/9/building-a-production-ready-node-js-app-with-typescript-and-docker

Husky
C:\dev\my2\my-nodejs>node node_modules/husky/lib/bin add .husky/pre-commit "npm test"
husky - updated .husky/pre-commit
C:\dev\my2\my-nodejs>node node_modules/husky/lib/bin add .husky/commit-msg "npx --no -- commitlint --edit '$1'" 
husky - created .husky/commit-msg

Later need edit .husky/commit-msg to something like 
```
npx --no -- commitlint --edit "$1"
```
