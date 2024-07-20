module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/stylistic",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", '@typescript-eslint'],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
