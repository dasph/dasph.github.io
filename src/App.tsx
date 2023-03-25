import type { Component } from 'solid-js';
import { Router, useRoutes } from '@solidjs/router';

import { Theme } from '@types';
import { setTheme, theme } from '@hooks';

import logo from '@assets/logo.svg';

import { routes } from './router';

export const App: Component<{ path?: string }> = (path) => {
  const Routes = useRoutes(routes);

  return (
    <div class={ theme() === Theme.DARK ? 'theme-dark' : undefined }>
      <header>
        <img src={logo} alt="logo" />
        <button onClick={() => setTheme(theme() === Theme.DARK ? Theme.LIGHT : Theme.DARK)}>
          theme
        </button>
      </header>
    </div>
  );
};
