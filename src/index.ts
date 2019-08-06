import { Swork } from "swork";

declare var clients: Clients;
declare var self: ServiceWorkerGlobalScope;

export const claimClients = (): Swork => {
    const app = new Swork();

    app.on("install", () => {
        self.skipWaiting();
    });

    app.on("activate", async () => {
        await clients.claim();
    });

    return app;
};
