## Keeper
一个记录每天健康指数的单页应用，利用localStorage进行本地存储，使用最新的react技术栈开发。<br/>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`
`npm run build` first, then run analyze to analyze the bundles.


## Stacks
1. React
2. Create-react-app
3. Echarts-for-react
4. antd
5. moment
6. clipboard
7. customize-cra
8. less

## Notes
1. create-react-app 没有 eject
2. 主要通过 customize-cra 修改 cra 的默认配置
3. antd 的日期选择组件，需要传入 moment 对象，所以又 TM 引入了 moment.js
4. 修改了配置变量，生产环境下 不生成 sourcemap 文件
5. 在 package.json 文件中，配置了 homepage 字段，用来修改编译后的静态文件路径
6. 引入了 source-map-explorer 支持分析打包后的文件大小，需要去 config-overrides 文件中，将 GENERATE_SOURCEMAP 置为 true
7. echarts-for-react 使用了按需引入的写法