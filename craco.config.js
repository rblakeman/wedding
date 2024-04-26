const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'panda-styles'),
        },
        /**
         * Resolves this error from CRA when trying to use above @panda alias
         *
         * Module not found: Error: You attempted to import /Users/rblakeman/Development/React Apps/wedding/panda-styles/jsx which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
         * You can either move it inside src/, or add a symlink to it from project's node_modules/.
         */
        configure: (webpackConfig) => {
            const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
                ({ constructor }) =>
                    constructor && constructor.name === 'ModuleScopePlugin',
            );

            webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
            return webpackConfig;
        },
    },
};
