# stylelint-config-ma

[![CircleCi](https://circleci.com/gh/massiveart/stylelint-config-ma.png?style=shield)](https://circleci.com/gh/massiveart/stylelint-config-ma)
[![npm](https://img.shields.io/npm/v/stylelint-config-ma.svg)](https://www.npmjs.com/package/stylelint-config-ma)
[![Size](https://img.shields.io/github/size/massiveart/stylelint-config-ma/index.js.svg)](https://github.com/massiveart/stylelint-config-ma/blob/master/index.js)
[![Install Size](https://packagephobia.now.sh/badge?p=stylelint-config-ma)](https://packagephobia.now.sh/result?p=stylelint-config-ma)

Stylelint shareable config used by MASSIVE ART.

## Installation

To make use of this config, install this package as development dependency of your project:

```bash
npm install stylelint-config-ma --save-dev
```

## Usage

Create a [`.stylelintrc`](http://stylelint.io/user-guide/configuration/) config file:

### .stylelintrc

```js
{
    "extends": "stylelint-config-ma"
}
```

## Version Update & Publish to NPM

### 1. Create release on github

Update package.json version on master branch:

```bash
git checkout master
git pull origin master
npm version [ major | minor | patch ] --no-git-tag-version
git add .
git commit -m "Release <version>"
git push origin master
```

Generate changelog:

```bash
github_changelog_generator --future-release <version>
```

Copy the text of the last release into and get new release.

### 2. Publish release

```
git fetch --tags
git checkout <version>
rm CHANGELOG.md # else it will be published with it
npm pack --dry-run # check that no unnecessary files are packed
npm publish
```

