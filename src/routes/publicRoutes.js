import { ConnectMetaBatties } from '../pages/metaConnect.jsx';
import { routePaths } from '../constants/paths.js';

export const publicRoutes = [
  {
    name: 'MetaBettiesConnect',
    path: routePaths.metaConnect,
    component: ConnectMetaBatties,
    exact: false,
  },
];
