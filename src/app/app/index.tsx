import { Suspense, type Component } from 'solid-js';
import { Router } from '@solidjs/router';

import { routes } from '@app';

import './.css';

type Props = {
  path?: string
}

export const App: Component<Props> = ({ path }) => {
  return (
    <Suspense children={<Router url={path} children={routes} />} />
  );
};
