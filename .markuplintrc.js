/** @type {import("@markuplint/ml-config").Config} */
module.exports = {
    parser: {
        // ".pug$": "@markuplint/pug-parser",
        ".[jt]sx?$": "@markuplint/jsx-parser",
        // ".vue$": "@markuplint/vue-parser",
        // ".svelte$": "@markuplint/svelte-parser",
        // ".any$": "./path/to/custom-parser/any-lang",
    },
    rules: {
        "attr-duplication": { severity: "error" },
        "character-reference": { severity: "error" },
        "deprecated-attr": { severity: "error" },
        "deprecated-element": { severity: "error" },
        "doctype": false, // { severity: "error", value: "always", option: { denyObsolateType: true } },
        "id-duplication": { severity: "error" },
        "permitted-contents": { severity: "error", value: [], option: { ignoreHasMutableChildren: true } },
        "required-attr": { severity: "error", value: [] },

        "landmark-roles": { severity: "warning", value: true, option: { ignoreRoles: [], labelEachArea: true } },
        "required-h1": {
            severity: "error",
            value: true,
            option: { "expected-once": true, "in-document-fragment": false },
        },
        "wai-aria": {
            severity: "error",
            value: true,
            option: {
                checkingValue: true,
                checkingDeprecatedProps: true,
                permittedAriaRoles: true,
                disallowSetImplicitRole: true,
                disallowSetImplicitProps: true,
                disallowDefaultValue: false,
            },
        },

        "class-naming": { severity: "warning" },

        "attr-equal-space-after": false, // { severity: "warning", value: "never" },
        "attr-equal-space-before": false, // { severity: "warning", value: "never" },
        "attr-spacing": false, // { severity: "error", value: true, option: { lineBreak: "either", width: 1 } },
        "attr-value-quotes": false, // { severity: "warning", value: "double" },
        "case-sensitive-attr-name": false, // { severity: "warning", value: "no-upper" },
        "case-sensitive-tag-name": { severity: "warning", value: "lower" },
        "indentation": false, // { severity: "warning", value: 2 },
    },
};
