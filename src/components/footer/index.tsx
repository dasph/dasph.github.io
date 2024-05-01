import type { VoidComponent } from 'solid-js';

import { Proton } from '@assets';
import { Author, Links } from '@types';

import styles from './.module.scss';

export const Footer: VoidComponent = () => (
  <footer class={styles.footer}>
    <div>
      <span>{`© 2024 ${Author}`}</span>
      <span>{'Powered by SolidJS & ❤️'}</span>
    </div>
    <a target='_blank' rel='noopener' aria-label='Proton' href={Links.PROTON}><Proton height='10' /></a>
  </footer>
)
