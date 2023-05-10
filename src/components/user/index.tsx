import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

import styles from './.module.scss';

import { avatar } from '@assets';
import { Image } from '@components';
import { Author } from '@types';

type Props = {
  className?: string;
};

export const User: Component<Props> = ({ className }) => (
  <section classList={{ [styles.section]: true, [className || '']: !!className }}>
    <Image source={avatar} />
    <span>{Author}</span>
  </section>
)
