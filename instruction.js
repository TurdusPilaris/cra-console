/*
* 1. Инициализация express приложения с Nodemon и --inspect + typescript
* 1.1 yarn init --yes
* 1.2 yarn add express
* 1.3 yarn add nodemon --dev
* 1.4 yarn add typescript ts-node @types/node @types/express --dev
* 1.5 yarn tsc --init */
 // 1.6 предпочтительное содержимое tsconfig.json
 //  {
 //  "compilerOptions": {
 //    "target": "es2016",
 //    "module": "commonjs",
 //    "outDir": "./dist",
 //    "strict": true,
 //    "noImplicitReturns": true,
 //    "esModuleInterop": true,
 //    "allowSyntheticDefaultImports": true,
 //    "skipLibCheck": true,
 //    "forceConsistentCasingInFileNames": true
 //  },
//  "include": ["src/**/*"],
//"exclude": ["node_modules", "**/*.test.ts"]
// 1.7 в package.json добавляем scripts:
//     "scripts": {
//     "dev": "yarn nodemon --inspect dist/index.js",
//         "watch": "tsc -w"
// },