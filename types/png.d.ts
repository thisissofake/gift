declare module '*.svg' {
  import { ReactElement, ImgHTMLAttributes } from 'react';

  const content: (props: ImgHTMLAttributes) => ReactElement;
  export default content;
}
