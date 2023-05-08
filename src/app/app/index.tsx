import type { Component } from 'solid-js';
import { Router } from '@solidjs/router';

import { Home } from '@views';

import './.css';

type Props = {
  path?: string
}

export const App: Component<Props> = ({ path }) => {
  return (
    <Router url={path} children={() => <Home />} />
  );
};
