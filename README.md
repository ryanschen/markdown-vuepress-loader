# markdown-vuepress-loader
:gear: markdown-loader built on vuepress  for webpack using marked.

## Installation
---
`npm install markdown-vuepress-loader -D`

## Usage
---

### Vue-cli 3.0+

```js
// vue.config.js
module.exports = {
  // ...
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('markdown-loader')
      .loader('markdown-vuepress-loader')
    // .options({ markdown })
  }
}
```

### import style in main.js
```js
// main.js
import 'markdown-vuepress-loader/lib/style.css'
```