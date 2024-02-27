module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier', 'react'],
    rules: {
        semi: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'no-multiple-empty-lines': 'error',
        'newline-before-return': 'error',
        'no-trailing-spaces': 'error',
        quotes: [
            'error',
            'single',
            {
                // for multi-line strings
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],

        // Plugins
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'index',
                    'parent',
                    'sibling',
                    'unknown',
                ],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
