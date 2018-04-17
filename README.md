# stylelint-config-ma

![CircleCi](https://circleci.com/gh/massiveart/stylelint-config-ma/tree/master.png)

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
npm publish
```

