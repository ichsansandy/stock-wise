import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import StockDetailsPage from '../pages/StockDetailsPage';
import store from '../redux/store';

test('StockDetailsPage will render exact route', async () => {
  const routes = [
    {
      path: '/:symbol',
      element: <StockDetailsPage />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/ADBE'],
    initialIndex: 1,
  });

  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  );

  expect(await screen.getByTestId('details-ADBE')).toHaveTextContent('ADBE');
});
