module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    // eslint开头的：ESLint官方的扩展
    // plugin开头的：插件类型扩展
    // eslint-config开头：npm包,使用时可省略前缀eslint-config-,如prettier,VueCli创建项目用prettier功能的包
    // @开头：扩展和eslint-config一样,只是在npm包上面加了一层作用域scope
    // rules规则比extends要高
    extends: [
        'plugin:react/recommended',
        'standard',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    // eslint只能解析js，所以像vue这种需要引入第三方插件，eslint-plugin-vue的省略写法，可省略eslint-plugin-
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none',
                singleQuote: true,
                tabWidth: 4,
                semi: false
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off'
    }
}
