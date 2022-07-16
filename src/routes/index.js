import { Crew, Destination, Home, Technology } from '../pages/'

export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'home',
  },
  {
    path: '/destination',
    element: <Destination />,
    name: 'destination',
  },
  {
    path: '/crew',
    element: <Crew />,
    name: 'crew',
  },
  {
    path: '/technology',
    element: <Technology />,
    name: 'technology',
  },
]
