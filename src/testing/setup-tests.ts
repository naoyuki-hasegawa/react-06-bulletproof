import '@testing-library/jest-dom/vitest';

import { initializeDb, resetDb } from '@/testing/mocks/db';
import { server } from '@/testing/mocks/server';

vi.mock('zustand');

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());
beforeEach(() => {
    const ResizeObserverMock = vi.fn(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserverMock);

    window.btoa = (str) => Buffer.from(str, 'binary').toString('base64');
    window.atob = (str) => Buffer.from(str, 'base64').toString('binary');

    initializeDb();
});
afterEach(() => {
    server.resetHandlers();
    resetDb();
});