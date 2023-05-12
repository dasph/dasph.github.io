import type { Component } from 'solid-js';

import { Default } from '@layouts';
import { Footer, Header, User } from '@components';

import styles from './.module.scss';

export const Home: Component = () => {
  return (
    <Default>
      <Header />
      <User className={styles.user} />
      <Footer />
    </Default>
  );
};
