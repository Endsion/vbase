# vbase

  基于vite创建的Vue 3 + TypeScript 项目. 又集成了eslint、stylelint、commitlint等、对代码进行优化限制，保持代码风格统一。

## 初始化
 1. npm i 
 2. 配置husky中的pre-commit钩子
 参照
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  #npx --no-install commitlint --edit $1
  npm run lint-staged
## 测试环境
 npm run dev

## 打包
 npm run build
