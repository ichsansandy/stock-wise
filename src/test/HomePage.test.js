import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { apiPriceChangeURLTest } from '../assets/api';
import HomePage from '../pages/HomePage';
import store from '../redux/store';

const dummyData = [];

for (let i = 0; i < 100; i += 1) {
  const object = {};
  object['1D'] = '0.5021';
  object.ytd = '100';
  dummyData.push(object);
}

const handlers = [
  rest.get(apiPriceChangeURLTest, (req, res, ctx) => {
    // Access query parameters with req.url.searchParams
    const apiKey = req.url.searchParams.get('apikey');

    if (apiKey === 'ead3ced727fd67f4e3425b7af2a9bae1') {
      // If the API key matches, return the dummy data
      return res(ctx.json(dummyData), ctx.delay(150));
    }
    // If the API key doesn't match, return an error
    return res(ctx.status(403), ctx.json({ message: 'Invalid API key' }));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives data and render it correctly', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </BrowserRouter>,
  );

  // should show no user initially, and not be fetching a user
  expect(screen.queryByText(/Loading \.\.\./i)).toBeInTheDocument();

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user

  // after some time, the user should be received
  expect(await screen.findByTestId('1D-ATVI')).toBeInTheDocument();
  expect(await screen.findByTestId('1D-ATVI')).toHaveTextContent('0.50 %');
});
