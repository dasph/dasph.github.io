import { lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

export const routes: RouteDefinition<string>[] = [{
  path: '/',
  component: lazy(() => import('./views/Home'))
}];
