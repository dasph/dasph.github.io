import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

import { Author, Links } from '@types';

import styles from './.module.scss';

export const Header: Component = () => (
  <header class={styles.header}>
    <A href='/'>{Author}</A>

    <aside>
      <A href={Links.BLOG}>{'blog'}</A>
      <A href={Links.RESUME}>{'resume'}</A>
    </aside>
  </header>
)
