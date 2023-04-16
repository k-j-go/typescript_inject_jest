```shell
npm install inversify reflect-metadata --save
```
### everyplace when have container to inject
```text
import "reflect-metadata";
```

#### change tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./build",
    "target": "es5",
    "lib": [
      "es6",
      "DOM"
    ],
    "types": [
      "reflect-metadata"
    ],
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}

```
####
for unit test 
```json
{
  "compilerOptions": {
    "outDir": "./build",
    "target": "es5",
    "lib": [
      "es6",
      "DOM"
    ],
    "types": [
      "reflect-metadata",
      "jest"
    ],
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
