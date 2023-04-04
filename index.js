'use strict';

module.exports = {
    'extends': 'stylelint-config-standard-scss',
    'customSyntax': 'postcss-scss',
    'rules': {
        'alpha-value-notation': 'number',
        'block-no-empty': true,
        'color-hex-length': 'long',
        'comment-no-empty': true,
        'declaration-empty-line-before': 'never',
        'font-weight-notation': 'numeric',
        'keyframes-name-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: (name) => `Expected keyframe name '${name}' to be camelCase`,
            },
        ],
        'no-descending-specificity': null,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'selector-class-pattern': [
            '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
            {
                resolveNestedSelectors: true,
                message: (selector) => `Expected class selector '${selector}' to match BEM CSS pattern (https://en.bem.info/methodology/css). Selector validation tool: https://regexr.com/3apms`,
            },
        ],
        'selector-max-compound-selectors': 3,
        'selector-max-id': 0,
        'selector-max-type': 2,
        'selector-max-combinators': 2,
        'selector-max-universal': 1,
        'selector-max-specificity': '0,3,0',
        'value-keyword-case': [
            'lower',
            {
                camelCaseSvgKeywords: true,
            }
        ],
        'scss/at-function-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: 'Expected function name to be camelCase',
            },
        ],
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: 'Expected mixin to be camelCase',
            },
        ],
        'scss/declaration-nested-properties': 'never',
        'scss/double-slash-comment-empty-line-before': null,
        'scss/dollar-variable-pattern': [
            '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])*$',
            {
                message: 'Expected variable to be camelCase',
            },
        ],
        'scss/no-global-function-names': null,
        'scss/percent-placeholder-pattern': [
            '^[a-z][a-z-A-Z0-9]*$',
            {
                message: 'Expected placeholder to be camelCase',
            },
        ],
    }
}
