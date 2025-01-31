import { routePaths } from '../constants/paths.js';
import { MarketPlace } from '../pages/marketPlace';
import { Events } from '../pages/events';
import { EventDetail } from '../pages/eventsDetail';
import { Profile } from '../pages/profile';
import { EditProfile } from '../pages/editProfile';

export const privateRoutes = [
  {
    name: 'MarketPlace',
    path: routePaths.marketPlace,
    component: MarketPlace,
    exact: false,
  },
  {
    name: 'Events',
    path: routePaths.events,
    component: Events,
    exact: false,
  },
  {
    name: 'EventsDetail',
    path: routePaths.eventsDetail,
    component: EventDetail,
    exact: false,
  },
  {
    name: 'Profile',
    path: routePaths.profile,
    component: Profile,
    exact: false,
  },
  {
    name: 'EditProfile',
    path: routePaths.editProfile,
    component: EditProfile,
    exact: false,
  },
];
