import type { RouteObject } from 'react-router';
import Root from '@/core/Root';
import { DefaultLayout } from '@/core/layouts';
import RouteErrorBoundary from '@/components/boundaries/RouteErrorBoundary';

const DefaultRouter: Array<RouteObject> = [
  {
    path: '/',
    Component: Root,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        Component: DefaultLayout,
        errorElement: <RouteErrorBoundary />,
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Component } = await Promise.resolve(import('@/pages/home'));

              return { Component };
            },
          },
          {
            path: 'timelines',
            children: [
              {
                index: true,
                lazy: async () => {
                  const { default: Component } = await Promise.resolve(import('@/pages/timelines'));

                  return { Component };
                },
              },
              {
                path: 'create',
                lazy: async () => {
                  const { default: Component } = await Promise.resolve(
                    import('@/pages/timelines/create'),
                  );

                  return { Component };
                },
              },
              {
                path: ':id',
                lazy: async () => {
                  const { default: Component } = await Promise.resolve(
                    import('@/pages/timelines/[id]'),
                  );

                  return { Component };
                },
              },
              {
                path: ':id/edit',
                lazy: async () => {
                  const { default: Component } = await Promise.resolve(
                    import('@/pages/timelines/[id]/edit'),
                  );

                  return { Component };
                },
              },
            ],
          },
        ],
      },
      // For pages with different layout create a child here before the NotFound page
      {
        path: '*',
        lazy: async () => {
          const { default: Component } = await Promise.resolve(import('@/pages/not-found'));

          return { Component };
        },
      },
    ],
  },
];

export default DefaultRouter;
