import {
  fetchResources as rawFetchResources,
  fetchResourceDetail as rawFetchResourceDetail
} from 'animegarden';

import { WORKER_BASE } from './constant';

const baseURL = 'https://' + (import.meta.env.SSR ? WORKER_BASE : 'garden.onekuma.cn/api/');

export const ofetch = async (url: string | RequestInfo, init?: RequestInit) => {
  if (import.meta.env.DEV && import.meta.env.HTTPS_PROXY) {
    const { ProxyAgent } = await import('undici');
    return fetch(url, {
      ...init,
      // @ts-ignore
      dispatcher:
        import.meta.env.DEV && import.meta.env.HTTPS_PROXY
          ? new ProxyAgent(import.meta.env.HTTPS_PROXY)
          : undefined
    });
  } else {
    return fetch(url, init);
  }
};

export const wfetch = (fn?: Fetcher): typeof ofetch => {
  if (fn) {
    return async (url: string | RequestInfo, init?: RequestInit) => {
      try {
        const resp = await fn.fetch(url, init);
        return resp;
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          if (error.stack) {
            console.log(...error.stack.split('\n'));
          }
        }
        return ofetch(url, init);
      }
    };
  } else {
    return ofetch;
  }
};

export async function fetchResources(
  page: number,
  options: {
    fetch?: typeof ofetch;
    search?: string[];
    include?: (string | string[])[];
    exclude?: string[];
    fansub?: number;
    publisher?: number;
    type?: string;
    after?: Date;
    before?: Date;
    signal?: AbortSignal;
  } = {}
) {
  return await rawFetchResources(options.fetch ?? ofetch, {
    baseURL,
    page,
    search:
      options.include || options.search
        ? {
            search: options.search,
            include: options.include,
            exclude: options.exclude
          }
        : undefined,
    fansub: options.fansub ? '' + options.fansub : undefined,
    publisher: options.publisher ? '' + options.publisher : undefined,
    type: options.type ? '' + options.type : undefined,
    after: options.after,
    before: options.before,
    signal: options.signal
  });
}

export async function fetchResourceDetail(href: string) {
  try {
    return await rawFetchResourceDetail(ofetch, href, {
      baseURL
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
