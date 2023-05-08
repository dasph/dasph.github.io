import type { Component } from 'solid-js';

import styles from './.module.scss';

export const NotFound: Component = () => {

  return (
    <div class={styles.notFound}>
      404
    </div>
  );
};
