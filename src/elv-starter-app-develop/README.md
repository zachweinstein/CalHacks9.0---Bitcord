# Eluvio Starter App

A project template for creating an Eluvio application using React, Mobx, and elv-client-js. 

### Prerequisites

- Node.js version 16 or 18
- NPM 8 or higher

### Setup

#### Cloning

Clone the repo. We recommend making use of the following flags:
```
git clone --depth <depth> -b <branch> <repo_url>
```
- `--depth <depth>` is the amount of commits to include. In order to avoid copying the history of this repository, we recommend `--depth 1`.
- `-b <branch>` is the name of the branch that you would like to clone from, i.e., `main` or `develop`.
- `repo_url` is the url of your repository.

#### Configuration

Create a file named `configuration.js` in the root of your project.
```
elv-starter-app
├── configuration.js
└── src
```

By default, WalletClient and ElvClient are initialized in the RootStore, which require the following configuration:
```
const EluvioConfiguration = {
  "config-url": <node-config-url>,

  "network": "main" | "demo",
  "mode": "staging" | "production"
};
```

### Installation

Run the following to install dependencies:
```
npm install
```

### Initialization

Run the following to start the server:

```
npm run serve
```
