import { claimClients } from "./../src/index";
import { mockInit } from "./mock-helper";
import { Swork } from "swork";

declare var global: any;

describe("claim clients tests", () => {
    beforeEach(() => {
        mockInit();
    });

    test("claim clients", async (done) => {        
        const swork = claimClients();

        const events = swork["eventHandlers"];

        expect([...events.values()].filter((x) => x.length > 0).length).toBe(2);

        done();
    });

    test("skipWaiting", () => {
        const handlers = claimClients()["eventHandlers"].get("install")!;

        expect(handlers).toBeTruthy();
        expect(handlers.length).toBe(1);

        const handler = handlers[0];

        const skipWaitingMock = jest.fn();

        Object.assign(global, {
            skipWaiting: skipWaitingMock
        });

        handler();

        expect(skipWaitingMock).toBeCalledTimes(1);
    });

    test("claimClients", () => {
        const handlers = claimClients()["eventHandlers"].get("activate")!;

        expect(handlers).toBeTruthy();
        expect(handlers.length).toBe(1);

        const handler = handlers[0];

        const claimMock = jest.fn();

        Object.assign(global, {
            clients: {
                claim: claimMock
            }
        });

        handler();

        expect(claimMock).toBeCalledTimes(1);
    });
});
