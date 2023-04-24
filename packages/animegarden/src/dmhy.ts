import { load } from 'cheerio';

import type { Resource, ResourceDetail, ResourceType } from './types';

import { retryFn } from './utils';

export interface FetchDmhyPageOptions {
  page?: number;

  retry?: number;
}

export interface FetchDmhyDetailOptions {
  retry?: number;
}

export async function fetchDmhyPage(
  ofetch: (request: string) => Promise<Response>,
  options: FetchDmhyPageOptions = {}
): Promise<Resource[]> {
  const { page = 1, retry = 5 } = options;

  const html = await retryFn(
    () => ofetch(`https://share.dmhy.org/topics/list/page/${page}`).then((r) => r.text()),
    retry
  );
  const $ = load(html);

  const res: Resource[] = [];
  $('#topic_list tbody tr').each((_idx, row) => {
    const tds = $(row).find('td');
    const createdAt = tds.eq(0).find('span').text().trim();
    const type = tds.eq(1).text().trim() as ResourceType;
    const title = tds.eq(2).children('a').text().trim();
    const href = 'https://share.dmhy.org' + tds.eq(2).children('a').attr('href')!.trim();
    const fansub = tds.eq(2).find('span.tag a');
    const fansubName = fansub.text().trim();
    const fansubId = fansub.attr('href')?.split('/').at(-1);
    const magnet = tds.eq(3).find('a').attr('href')!;
    const size = tds.eq(4).text().trim();
    const publisher = tds.eq(8).find('a');
    const publisherName = publisher.text();
    const publisherId = publisher.attr('href')!.split('/').at(-1)!;

    res.push({
      title,
      href,
      type,
      magnet,
      size,
      fansub: fansubId ? { id: fansubId, name: fansubName } : undefined,
      publisher: { id: publisherId, name: publisherName },
      createdAt
    });
  });
  return res;
}

export async function fetchDmhyDetail(
  ofetch: (request: string) => Promise<Response>,
  href: string,
  options: FetchDmhyDetailOptions = {}
): Promise<ResourceDetail> {
  const url = new URL(href, `https://share.dmhy.org/topics/view/`);
  const { retry = 5 } = options;

  const html = await retryFn(() => ofetch(url.href).then((r) => r.text()), retry);
  const $ = load(html);

  const title = $('.topic-main>.topic-title>h3').text().trim();

  return {
    title,
    href: url.href
  };
}
