module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules:  {
    "prettier/prettier": ["warn", {
      semi:  true,
      trailingComma:  'all',
      singleQuote:  true,
      printWidth:  80,
      tabWidth:  2,
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
