import { AdminComponent } from '../components/admin/admin.jsx';

export const adminRoutes = [
  {
    name: 'create-new-event',
    path: '/admin/create-new-event',
    component: AdminComponent,
    exact: false,
  },
];
