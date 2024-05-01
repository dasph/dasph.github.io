import { RouteDefinition } from '@solidjs/router';

import { views } from '@views';

export const routes = [{
  path: '/',
  component: views['home']
}, {
  path: '/404',
  component: views['not-found']
}] satisfies RouteDefinition<string>[];
