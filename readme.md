# swork-claim-clients

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

## Contact

If you are using [swork](https://www.npmjs.com/package/swork) or any of its related middlewares, please let me know on [gitter](https://gitter.im/swork-chat/community). I am always looking for feedback or additional middleware ideas.
