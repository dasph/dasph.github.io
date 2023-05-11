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
    { Icon: Email, url: Links.EMAIL },
    { Icon: Github, url: Links.GITHUB },
    { Icon: Linkedin, url: Links.LINKEDIN },
  ])

  onMount(() => void setLinks(([{ Icon, url }, ...rest]) => [{ Icon, url: atob(url) as Links }, ...rest ]))

  return (
    <section classList={{ [styles.section]: true, [className || '']: !!className }}>
      <Image source={avatar} />
      <h3>{Author}</h3>
      <h4>{'Software Developer'}</h4>
      <div>
        <For each={links()} children={({ Icon, url }) => <a target='_blank' rel='noopener' href={url}>{<Icon />}</a>} />
      </div>
    </section>
  )
}
