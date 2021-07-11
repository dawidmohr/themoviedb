import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { searchMovie } from './movie-searcher.api';

const delay = process.env.NODE_ENV === 'test' ? 0 : 1500

const server = setupServer(
    rest.get(
        'https://api.themoviedb.org/3/search/movie',
        async (req, res, ctx) => {
            return res(ctx.delay(delay), ctx.json('ok'));
        },
    ),
)

beforeAll(() => server.listen());
beforeAll(() => server.listen());
afterAll(() => server.close());

test('fetch movie data', async () => {
    const data = await searchMovie('test');
    expect(data).toBe('ok');
});

