import { Home, About, Contact } from 'pages';

export const routes = [
  {
    path: ['/', '/home'],
    page: Home,
    exact: true,
  },
  {
    path: '/about',
    page: About,
    exact: true,
  },
  {
    path: '/contact',
    page: Contact,
    exact: true,
  },
];
