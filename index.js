"use strict"

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
        "stylelint-scss"
    ],
    "ignoreFiles": [
        "sass/vendor/*.scss"
    ],
    "rules": {
        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "blockless-after-same-name-blockless",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ],
                "ignoreAtRules": [
                    "extend",
                    "include",
                    "else",
                    "elseif",
                    "content"
                ]
            }
        ],
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "content",
                    "extend",
                    "include",
                    "mixin",
                    "if",
                    "for",
                    "else",
                    "elseif",
                    "error",
                    "each",
                    "function",
                    "return",
                    "support",
                    "while"
                ]
            }
        ],
        "at-rule-name-space-after": "always",
        "function-comma-newline-before": "never-multi-line",
        "function-name-case": [
            "lower",
            {
                "ignoreFunctions": [
                    "/^[a-z][a-z-A-Z0-9]*$/"
                ]
            }
        ],
        "block-closing-brace-newline-after": [
            "always",
            {
                "ignoreAtRules": [ "if", "else", "elseif" ]
            }
        ],
        "string-quotes": "single",
        "value-keyword-case": "lower",
        "declaration-empty-line-before": "never",
        "selector-attribute-quotes": "always",
        "selector-class-pattern": "^[a-z][a-z-A-Z0-9]*$",
        "selector-max-compound-selectors": [
            3,
            {
                "severity": "warning"
            }
        ],
        "selector-max-id": 0,
        "selector-max-type": [
            2,
            {
                "severity": "warning"
            }
        ],
        "selector-max-combinators": [
            2,
            {
                "severity": "warning"
            }
        ],
        "selector-max-universal": 1,
        "selector-max-specificity": "0,3,0",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "custom-media-pattern": "^[a-z][a-z-A-Z0-9]*$",
        "media-feature-parentheses-space-inside": "never",
        "media-query-list-comma-newline-before": "never-multi-line",
        "at-rule-semicolon-space-before": "never",
        "indentation": 4,
        "max-line-length": 120,
        "no-descending-specificity": [
            true,
            {
                "severity": "warning"
            }
        ],
        "no-duplicate-selectors": true,
        "no-empty-source": null,
        "block-no-empty": null,
        "color-hex-length": "long",
        "color-hex-case": ["upper"],
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "shorthand-property-no-redundant-values": null,
        "scss/dollar-variable-pattern": "^[a-z][a-z-A-Z0-9]*$",
        "scss/dollar-variable-colon-space-after": "always-single-line",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested",
                    "after-comment",
                    "after-dollar-variable"
                ]
            }
        ],
        "scss/percent-placeholder-pattern": "^[a-z][a-z-A-Z0-9]*$",
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/declaration-nested-properties": "never",
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-function-pattern": "^[a-z][a-z-A-Z0-9]*$",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate"
    }
}
