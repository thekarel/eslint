module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      jest: true,
      node: false
    },
    plugins: [
      'import',
      'react'
    ],
    'extends': 'eslint:recommended',
    rules: {
      'array-bracket-spacing': [
        'error',
        'never'
      ],
      'array-callback-return': 'error',
      'arrow-body-style': [
        'error',
        'as-needed'
      ],
      'arrow-parens': [
        'error',
        'always'
      ],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false
        }
      ],
      camelcase: 'error',
      'comma-dangle': [
        'error',
        'always-multiline'
      ],
      'computed-property-spacing': [
        'error',
        'never'
      ],
      'consistent-return': 'error',
      curly: [
        'error'
      ],
      'default-case': 'error',
      eqeqeq: [
        'error',
        'smart'
      ],
      'func-names': [
        'error',
        'as-needed'
      ],
      'function-paren-newline': [
        'error',
        {
          minItems: 3
        }
      ],
      'global-require': 'error',
      indent: ['error', 2],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true
        }
      ],
      'max-len': [
        'error',
        {
          code: 120
        }
      ],
      'new-cap': 'error',
      'no-case-declarations': 'error',
      'no-console': 'error',
      'no-extend-native': 'error',
      'no-lonely-if': 'error',
      'no-mixed-operators': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-assign': 'error',
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false
        }
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0
        }
      ],
      'no-param-reassign': 'error',
      'no-path-concat': 'error',
      'no-plusplus': 'error',
      'no-return-assign': [
        'error',
        'always'
      ],
      'no-tabs': 'error',
      'no-underscore-dangle': 'error',
      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true 
        }
      ],
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { 
            multiline: true, 
            minProperties: 1 
          },
          ObjectPattern: { 
            multiline: true, 
            minProperties: 1 
          },
          ImportDeclaration: { 
            multiline: true, 
            minProperties: 2,
            consistent: false,
          },
          ExportDeclaration: { 
            multiline: true, 
            minProperties: 1, 
          },
        },
      ],
      'object-curly-spacing': [
        'error',
        'never'
      ],
      'object-property-newline': [
        'error',
        {
          allowMultiplePropertiesPerLine: false
        }
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
          avoidExplicitReturnArrows: true
        }
      ],
      'one-var': [
        'error',
        'never'
      ],
      'one-var-declaration-per-line': 'error',
      'operator-assignment': [
        'error',
        'never'
      ],
      'padded-blocks': [
        'error',
        {
          blocks: 'never',
          classes: 'never',
          switches: 'never'
        }
      ],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-promise-reject-errors': [
        'error',
        {
          allowEmptyReject: true
        }
      ],
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'quote-props': 'off',
      quotes: [
        'error',
        'single'
      ],
      radix: 'error',
      semi: [
        'error',
        'never'
      ],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'semi-style': [
        'error',
        'last'
      ],
      'sort-keys': 'error',
      'space-in-parens': [
        'error',
        'never'
      ],
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: true
        }
      ],
      'spaced-comment': 'error',
      strict: [
        'error',
        'never'
      ],
      'switch-colon-spacing': 'error',
      'valid-typeof': 'error',
      'vars-on-top': 'error',
  
      'import/default': 'error',
      'import/export': 'error',
      'import/exports-last': 'error',
      'import/first': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-commonjs': 'error',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-unresolved': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/prefer-default-export': 'off',
  
      'react/boolean-prop-naming': 'error',
      'react/destructuring-assignment': [
        'error',
        'always'
      ],
      'react/forbid-component-props': 'error',
      'react/forbid-foreign-prop-types': 'error',
      'react/forbid-prop-types': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-closing-bracket-location': [
        'error',
        {
          location: 'line-aligned'
        }
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        'never'
      ],
      'react/jsx-curly-spacing': [
        'error',
        'never'
      ],
      'react/jsx-equals-spacing': [
        'error',
        'never'
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: [
            '.js'
          ]
        }
      ],
      'react/jsx-first-prop-new-line': [
        'error',
        'multiline-multiprop'
      ],
      'react/jsx-indent': [
        'error',
        2
      ],
      'react/jsx-indent-props': [
        'error',
        2
      ],
      'react/jsx-key': 'error',
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1
        }
      ],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true
        }
      ],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-one-expression-per-line': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-sort-props': 'error',
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never'
        }
      ],
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'error',
      'react/jsx-wrap-multilines': [
        'error', { 
          assignment: "parens-new-line", 
          return: "parens-new-line", 
          arrow: "parens-new-line"
        }
      ],
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'error',
      'react/no-deprecated': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-typos': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'warn',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/prefer-es6-class': [
        'error',
        'always'
      ],
      'react/prefer-stateless-function': 'error',
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'error',
      'react/require-default-props': 'off',
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'error',
      'react/sort-comp': 'error',
      'react/style-prop-object': 'error'
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        blockBindings: true,
        modules: true,
        experimentalObjectRestSpread: true
      }
    }
  }