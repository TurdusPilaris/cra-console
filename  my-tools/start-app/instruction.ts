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
/*
Запуск  yarn nodemon --inspect src/index.ts
 */

/*
*NPM — это официальный менеджер пакетов Node.js, который поставляется вместе с нодой и устанавливается по умолчанию.
* Он использует централизованный реестр для хранения и управления зависимостями.Он также поддерживает локальную и глобальную установку пакетов.
* Однако, если в проекте есть большое количество зависимостей, NPM будет занимать очень много места на диске и медленно устанавливать пакеты.
* NPM создает папку node_modules для каждого вашего проекта. В них он загружает из интернета и сохраняет на диске каждый пакет из всей иерархии зависимостей.
*
* YARN в 2016 году вышел. Это менеджер пакетов, разработанный Facebook. В отличие от NPM его нужно устанавливать вручную.
* Какие есть фишки у YARN?
1. Workspaces: установка и объединение зависимостей для нескольких проектов.
* Чтобы не устанавливать зависимость отдельно для каждого проекта, мы используем один Lock файл для всех и храним его в общей папке.
* Соответственно из этой папки, одной единственной командой можно устанавливать зависимости для всех подпроектов.
2. Автоматическое разрешение конфликтов при слиянии yarn.lock файлов.
* LOCK‑файлы содержат точное описание зависимостей пакета и их версий, которые использовались во время последней установки или обновления проекта, включая транзитивные пакеты.
3. Selective dependency resolutions(возможность определить версию для транзитивной зависимости.) что бы можно было откатиться к более стабильноверсии если в пакете баг
4. Yarn upgrade‑interactive. - команда обновления зависимостей
5. Возможность работы с плагинами */