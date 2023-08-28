https://duncanlew.medium.com/unit-testing-typescript-with-jest-part-one-f39d2392d0f4

```bash
mkdir typescript-jest
cd typescript-jest
mkdir src
mkdir test
```

Initialize project with NPM
```bash
npm init -y
```

Create a boilerplate .gitignore file in our project specifically for Node.js
```bash
npx gitignore node
```


Install the required dependencies for TypeScript and Jest. -D flag means that packages need to be installed as developer dependencies
```bash
npm i -D typescript jest ts-jest @types/jest
```

Configure Typescript starter code
```bash
npx tsc --init
```

Will generate tsconfig.json. Need to change a bit
```json

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true
  }
}
```

Configure Jest and starter tests
```bash
npx ts-jest config:init
```

add the test command for Jest in our package.json file
package.json
```json
"scripts": {
    "test": "jest"
},
```

```bash
npm test
```