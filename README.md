# gas-clasp-starter

This is a fork of [howdy39's gas-clasp-starter](https://github.com/hawdy39/gas-clasp-starter/).

The main differences are:

- Using yarn and ava instead of npm and Jest respectively
- Better module handling and stricter type checking
- Automatic code formatting powered by husky and lint-staged

The original README is as follows:

---

A starter template for Google Apps Script by [google/clasp](https://github.com/google/clasp)

## Article

[(Japanese) Google Apps Script をローカル環境で快適に開発するためのテンプレートを作りました](https://qiita.com/howdy39/items/0e799a9bfc1d3bccf6e5)

## Tech Stack

- [google/clasp](https://github.com/google/clasp)
- [webpack](https://webpack.js.org/)
- [TypeScript](http://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://prettier.io/)
- [Jest](https://facebook.github.io/jest/)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [google/clasp](https://github.com/google/clasp)

## Getting Started

### Clone the repository

```
git clone --depth=1 https://github.com/howdy39/gas-clasp-starter.git <project_name>
```

### Install dependencies

```
cd <project_name>
npm install
```

### Configuration

#### Open `.clasp.json`, change scriptId

What is scriptId ? https://github.com/google/clasp#scriptid-required

```
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

#### Open `src/appsscript.json`, change timeZone (optional)

[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)

```
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```

### Development and build project

```
npm run build
```

### Push

```
clasp push
```

## Others

### howdy39/gas-clasp-library

[howdy39/gas-clasp-library](https://github.com/howdy39/gas-clasp-library) is sample project made with [Google Apps Script Libraries](https://developers.google.com/apps-script/guides/libraries).
also, `gas-clasp-library` use circle CI.

## License

This software is released under the MIT License, see LICENSE.txt.
