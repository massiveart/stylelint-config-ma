'use strict';

module.exports = {
    'extends': 'stylelint-config-standard-scss',
    'customSyntax': 'scss',
    'rules': {
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: [
                    'if',
                    'media',
                    'return',
                    'extend',
                    'include',
                    'else',
                ]
            }
        ],
        'font-weight-notation': 'numeric',
        'value-keyword-case': [
            'lower',
            {
                camelCaseSvgKeywords: true,
            }
        ],
        'keyframes-name-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: (name) => `Expected keyframe name '${name}' to be camelCase`,
            },
        ],
        'selector-class-pattern': [
            '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
            {
                resolveNestedSelectors: true,
                message: (selector) => `Expected class selector '${selector}' to match BEM CSS pattern (https://en.bem.info/methodology/css). Selector validation tool: https://regexr.com/3apms`,
            },
        ],
        'selector-max-compound-selectors': [
            3,
            {
                severity: 'warning'
            }
        ],
        'selector-max-id': 0,
        'selector-max-type': [
            2,
            {
                severity: 'warning'
            }
        ],
        'selector-max-combinators': [
            2,
            {
                severity: 'warning'
            }
        ],
        'selector-max-universal': 1,
        'selector-max-specificity': '0,3,1',
        'custom-media-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: (name) => `Expected custom media query name '${name}' to be camelCase`,
            },
        ],
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'block-no-empty': true,
        'color-hex-length': 'long',
        'comment-no-empty': true,
        'number-max-precision': 3,
        'scss/dollar-variable-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: 'Expected variable to be camelCase',
            },
        ],
        'scss/percent-placeholder-pattern': [
            '^[a-z][a-z-A-Z0-9]*$',
            {
                message: 'Expected placeholder to be camelCase',
            },
        ],
        'scss/declaration-nested-properties': 'never',
        'scss/at-function-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: 'Expected function name to be camelCase',
            },
        ],
    }
}
