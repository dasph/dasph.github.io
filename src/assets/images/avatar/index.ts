import { Image, ImageMime } from '@types'

import jpg from './avatar.jpg';
import avif from './avatar.avif';

export const avatar: Image = {
  alt: `Andrew's profile picture`,
  width: 640,
  height: 640,
  source: [{ mime: ImageMime.JPG, srcset: jpg }, { mime: ImageMime.AVIF, srcset: avif }]
};
