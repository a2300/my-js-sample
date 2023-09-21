Examples:
https://github.com/mikro-orm/express-ts-example-app

Building REST API with Express, TypeScript and Swagger
https://rsbh.dev/blogs/rest-api-with-express-typescript

https://github.com/gbols/mikroORM-express-tutorial/tree/master

https://blog.logrocket.com/build-api-from-scratch-using-mikroorm-node-js-express-js/


```
C:\dev\my2\my-nodejs>docker-compose up -d
```

Create migrations
```
C:\dev\my2\my-nodejs> npx mikro-orm migration:create
```

In postgres execute
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

```
C:\dev\my2\my-nodejs>npx mikro-orm migration:up   
```

Run app
```
C:\dev\my2\my-nodejs>npm start
```