import type { Component } from 'solid-js';

import styles from './.module.scss';

export default (() => {
  return (
    <div class={styles.notFound}>
      404
    </div>
  );
}) satisfies Component;
