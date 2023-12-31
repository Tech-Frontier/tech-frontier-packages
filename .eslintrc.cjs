module.exports = {
  settings: {
    // NOTE: 아래 내용을 추가해야 ts 로 추가한 alias paths 설정을 eslint 에서 읽을 수 있음
    "import/resolver": {
      typescript: {
        project: "*/tsconfig.json",
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "import"],
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb-typescript",
    "next/core-web-vitals",
    // @see https://github.com/import-js/eslint-plugin-import/tree/main#installation
    "plugin:import/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  ecmaFeatures:  {
    jsx:  true,  // Allows for the parsing of JSX
  },
  rules: {
    "import/no-unresolved": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error"],

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@next/next/no-html-link-for-pages": "off",

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "type", ["parent", "sibling", "index"], "unknown"],
        pathGroups: [],
        pathGroupsExcludedImportTypes: ["@tanstack*"],
        alphabetize: {
          order: "asc",
        },
      },
    ],

    "@typescript-eslint/no-use-before-define": "off",

    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "react/jsx-props-no-multi-spaces": "error",
    "key-spacing": ["error", { beforeColon: false }],
    "eol-last": ["error", "always"],
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "object-property-newline": ["error"],

    // react jsx 관련 lint
    "react/jsx-indent" : ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-newline": ["error", { "prevent": false }],
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "proportional-always", "closingSlash": "never" }],
    "react/jsx-space-before-closing": ["error"],
    "react/jsx-closing-bracket-location": ["error"],
    "react/jsx-closing-tag-location": ["error"],
    "react/jsx-first-prop-new-line": ["error", "multiline"]
  },
};
