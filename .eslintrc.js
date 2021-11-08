/** @type {import("eslint").Linter.Config} */
module.exports = {
    // env: {
    //     browser: true,
    //     commonjs: true,
    //     es6: true,
    //     node: true,
    // },
    plugins: [
        //
        "@typescript-eslint",
        // "jest",
        "react",
        "react-hooks",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        // ecmaFeatures: {
        //     jsx: true,
        // },
        // ecmaVersion: 2018,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        // "plugin:jest/recommended",
        "prettier",
    ],
    rules: {
        // "no-console": "warn",
        "no-else-return": "error",
        "curly": "error",
        "react/prop-types": "off",
    },
};
