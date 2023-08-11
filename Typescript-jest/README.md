https://duncanlew.medium.com/unit-testing-typescript-with-jest-part-one-f39d2392d0f4

```bash
mkdir typescript-jest
cd typescript-jest
mkdir src
mkdir test

npm init -y

npx gitignore node


npm i -D typescript jest ts-jest @types/jest

npx tsc --init
```

tsconfig.json
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

```bash
npx ts-jest config:init
```

package.json
```json
"scripts": {
    "test": "jest"
},
```

```bash
npm test
```