import { lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

export const routes: RouteDefinition<string>[] = [{
  path: '/',
  component: lazy(() => import('./views/Home'))
}, {
  path: '/404',
  component: lazy(() => import('./views/Home'))
}];
