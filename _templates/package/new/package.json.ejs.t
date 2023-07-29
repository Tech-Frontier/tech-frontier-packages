---
to: packages/<%= name %>/package.json
---
{
  "name": "@tech-frontier/<%= name %>",
  "version": "0.0.0",
  "exports": {
    ".": "./src/index.ts",
    "./package.json": "./package.json"
  },
  "main": "./src/index.ts",
  "publishConfig": {
    "access": "public",
    "exports": {
      ".": {
        "types": "./dist/index.d.ts",
        "require": "./dist/index.js",
        "import": "./dist/index.mjs"
      },
      "./package.json": "./package.json"
    },
    "main": "./dist/index.js"
  },
  "scripts": {
    "prepack": "yarn build",
    "build": "rm -rf dist && tsup ./src/index.ts --format cjs,esm --dts",
    "dev": "yarn run build --watch",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@types/node": "^18.15.13",
    "ts-node": "^10.9.1",
    "tsup": "^7.0.0",
    "typescript": "^5.1.6"
  }
}
