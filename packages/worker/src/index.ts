import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { cache } from 'hono/cache';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

import type { Env } from './types';

import { connect } from './database';
import { handleScheduled } from './scheduled';
import { getRefreshTimestamp } from './state';
import { queryResourceDetail, searchResources } from './query';

const app = new Hono<{ Bindings: Env }>();

app.use('*', cors());
app.use('*', logger());
app.use('*', prettyJSON());

app.get('/', async (c) => {
  console.log('Req', c.env);
  return c.json({
    message: 'AnimeGarden - 動漫花園 3-rd party mirror site',
    timestamp: await getRefreshTimestamp(c.env)
  });
});

app.get(
  '/resource/:href',
  cache({ cacheName: 'animegarden', cacheControl: 'max-age=86400' }),
  async (c) => {
    return queryResourceDetail(c);
  }
);

app.get('/resources', async (c) => {
  return searchResources(c);
});

app.post('/resources', async (c) => {
  return searchResources(c);
});

// Only used for debug
// app.put('/resources', async (c) => {
//   return c.json(await handleScheduled(c.env));
// });

app.get('/users', cache({ cacheName: 'animegarden', cacheControl: 'max-age=86400' }), async (c) => {
  const db = connect(c.env);
  const users = await db.selectFrom('User').selectAll().execute();
  return c.json({ users });
});

app.get('/teams', cache({ cacheName: 'animegarden', cacheControl: 'max-age=86400' }), async (c) => {
  const db = connect(c.env);
  const teams = await db.selectFrom('Team').selectAll().execute();
  return c.json({ teams });
});

app.all('*', (c) => c.json({ message: '404 NOT FOUND' }, 404));

app.onError((err, c) => {
  if (err.message) {
    console.log(...err.message.trim().split('\n'));
  }
  if (err.stack) {
    console.log(...err.stack.trim().split('\n'));
  }
  return c.json({ status: 500, messsage: err?.message ?? 'Internal Error' }, 500);
});

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    console.log('app');
    return app.fetch(request, env, ctx);
  },
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(handleScheduled(env));
  }
};
