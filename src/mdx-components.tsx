import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import type { ImgHTMLAttributes } from 'react';

// 外链图图床常带奇怪压缩/响应头，走 next/image 优化会 400；直接原图更稳
function DocsImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { className, alt = '', ...rest } = props;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...rest}
      alt={alt}
      className={['rounded-lg', className].filter(Boolean).join(' ')}
      loading={props.loading ?? 'lazy'}
    />
  );
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    Tab,
    Tabs,
    img: DocsImage,
    ...components,
  };
}
