# swork-claim-clients

[![Greenkeeper badge](https://badges.greenkeeper.io/justin-lee-collins/swork-claim-clients.svg)](https://greenkeeper.io/)

swork-claim-clients is a middleware designed to take immediate control of any connected clients. It is built with TypeScript and async methods.

### Example

```ts
import { Swork } from "swork";
import { claimClients } from "swork-claim-clients";

const app = new Swork();

app.use(claimClients());

app.listen();
```

## Installation

Install via npm:

```ts
npm install swork-claim-clients
```

Install via yarn:

```ts
yarn add swork-claim-clients
```
