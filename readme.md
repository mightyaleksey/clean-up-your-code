clean up your code
==================

A small attempt of mine to simplier development of the multiple packages and keeps its quality on the certain level.


## Preface

The name was inspired by the book **React Design Patterns and Best Practices** by **Michele Bertoli**.


## Description

This repo is built with [Lerna](https://lernajs.io/) and contains packages with different eslint configurations.

See the full list of available packages at [packages directory](./packages).


## Development

- `npm install -g lerna@latest` — install the latest version of lerna.
- `lerna bootstrap` — links dependencies in the repo together.
- `lerna publish --npm-tag=next` — publish under tag.
- `lerna publish --skip-git` — skip any git commands.


## License

> The MIT License
