import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

import { Author, Links } from '@types';

import styles from './.module.scss';

export const Header: Component = () => (
  <header class={styles.header}>
    <A href='/'>{Author}</A>

    <aside>
      <a target='_blank' rel='noopener' href={Links.BLOG}>{'blog'}</a>
      <a target='_blank' rel='noopener' href={`//cv.${location.hostname}/${Links.RESUME_PATH}`}>{'resume'}</a>
    </aside>
  </header>
)
