/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended', // Playwright best practices for tests
    'prettier', // must be last to disable formatting rules ESLint-side
  ],
  env: { es2022: true, node: true },
  ignorePatterns: ['node_modules', 'playwright-report', 'test-results', '.playwright', 'dist'],
  overrides: [
    {
      files: ['tests/**/*.ts'],
      plugins: ['playwright'],
      // plugin:playwright/recommended already applied above; keep if you want extra rules per tests dir
      rules: {
        // Example: you can tweak Playwright rules here
        // 'playwright/no-wait-for-timeout': 'warn',
      },
    },
  ],
};
