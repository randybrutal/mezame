module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
        '@vue/typescript'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', 'import'],
    globals: {
        // Ramda
        R: true,
        axios: true
    },
    // 自訂規則
    rules: {
        'no-underscore-dangle': ['error', { allow: ['__'] }],
        'no-bitwise': ['error', { allow: ['~'] }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1
            }
        ],
        semi: 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
        'no-param-reassign': [
            2,
            {
                props: false
            }
        ],
        camelcase: 'off',
        '@typescript-eslint/naming-convention': ['error', { selector: 'property', format: null }],
        'comma-dangle': [2, 'never'],
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'as-needed'],
        'global-require': 0,
        'max-len': 0,
        'object-shorthand': 1,
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        // 暫時先關掉
        'no-alert': 0,
        // don't require .vue extension when importing
        'import/extensions': [
            'error',
            'always',
            {
                ts: 'never',
                js: 'never'
            }
        ],
        'import/prefer-default-export': 1,
        'import/no-dynamic-require': 0,
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: ['test/unit/index.js']
            }
        ],
        // vue plugin
        'vue/html-indent': [1, 4],
        'vue/attributes-order': [1],
        'no-mixed-operators': [0],
        'vue/max-attributes-per-line': [
            1,
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/attribute-hyphenation': [2, 'never', { ignore: ['custom-prop'] }],
        'vue/html-self-closing': [
            1,
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'always'
        }],
        'class-methods-use-this': 0,
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { 'ignoreTypeReferences': true, 'typedefs': false }]
    }
};
