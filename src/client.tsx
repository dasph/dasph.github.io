import { hydrate, render } from 'solid-js/web';

import { App } from './App'

(import.meta.env.DEV ? render : hydrate)(() => <App />, document.getElementById('root')!);
