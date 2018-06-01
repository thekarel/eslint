# @thekarel Eslint rules

To use this lint config in your project:

1. `yarn add -D eslint-plugin-import eslint-plugin-react babel-eslint`
2. add `"eslint-config-thekarel": "thekarel/eslint-config-thekarel"` to `devDependencies` in `package.json`
3. `yarn` 
4. Add to your `.eslintrc.js`: 

```
module.exports = {
  root: true,
  extends: 'eslint-config-thekarel',
}
```