import { RouteDefinition } from '@solidjs/router';

import { Home, NotFound } from '@views'

export const routes: RouteDefinition<string>[] = [{
  path: '/',
  component: Home
}, {
  path: '/404',
  component: NotFound
}];
