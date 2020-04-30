import { Home, About, Contact } from 'pages';

const routes = [
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

export default routes;
