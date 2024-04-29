import { Component, createSignal, For, onMount } from 'solid-js';

import styles from './.module.scss';

import { Image } from '@components';
import { Author, Links } from '@types';
import { avatar, Email, Github, Linkedin } from '@assets';

type Props = {
  className?: string;
};

export const User: Component<Props> = ({ className }) => {
  const [links, setLinks] = createSignal([
    { Icon: Email, url: Links.EMAIL, label: 'Email' },
    { Icon: Github, url: Links.GITHUB, label: 'GitHub' },
    { Icon: Linkedin, url: Links.LINKEDIN, label: 'LinkedIn' }
  ])

  onMount(() => void setLinks(([{ Icon, url, label }, ...rest]) => [{ Icon, label, url: atob(url) as Links }, ...rest ]))

  return (
    <section classList={{ [styles.section]: true, [className || '']: !!className }}>
      <Image source={avatar} />
      <h3>{Author}</h3>
      <h4>{'Software Developer'}</h4>
      <div>
        <For each={links()} children={({ Icon, label, url }) => <a target='_blank' rel='noopener' aria-label={label} href={url}>{<Icon />}</a>} />
      </div>
    </section>
  )
}
