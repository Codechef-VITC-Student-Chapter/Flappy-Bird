module.exports = {
  // Specifies that this is the root configuration file
  root: true,

  // Defines the environments in which the code is expected to run
  env: {
    browser: true, // Code is expected to run in the browser
    es2020: true, // Code is using ECMAScript 2020 features
  },

  // Extends from base configurations and recommended rules
  extends: [
    'eslint:recommended', // Uses the recommended ESLint rules
    'plugin:react/recommended', // Uses the recommended rules from the ESLint React plugin
    'plugin:react/jsx-runtime', // Enables rules for React's new JSX transform
    'plugin:react-hooks/recommended', // Uses recommended rules for React Hooks
  ],

  // Specifies files and directories to ignore
  ignorePatterns: [
    'dist', // Ignore the 'dist' directory (typically used for build outputs)
    '.eslintrc.cjs', // Ignore this ESLint configuration file itself
  ],

  // Defines the parser options
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript syntax
    sourceType: 'module', // Specifies that the code uses ES modules
  },

  // Specifies settings for specific plugins
  settings: {
    react: {
      version: '18.2', // Specifies the version of React to use (for linting rules compatibility)
    },
  },

  // Defines additional plugins to use
  plugins: ['react-refresh'], // Includes the 'react-refresh' plugin for hot reloading support in development

  // Customizes specific rules
  rules: {
    'react/jsx-no-target-blank': 'off', // Disables the rule that prevents using `target="_blank"` without `rel="noopener noreferrer"` (you might want to manage this manually)
    'react-refresh/only-export-components': [
      'warn', // Set the rule to show warnings instead of errors
      { allowConstantExport: true }, // Allows exporting constants without triggering the rule
    ],
  },
};
