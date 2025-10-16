import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) {
      // 为不同图标设置不同颜色
      const getIconColor = (iconName: string) => {
        switch (iconName) {
          case 'Server':
            return 'text-blue-600 dark:text-blue-400';
          case 'FileBox':
            return 'text-green-600 dark:text-green-400';
          case 'CircleGauge':
            return 'text-purple-600 dark:text-purple-400';
          case 'Database':
            return 'text-orange-600 dark:text-orange-400';
          default:
            return 'text-gray-600 dark:text-gray-400';
        }
      };

      return createElement(icons[icon as keyof typeof icons], {
        className: getIconColor(icon),
        size: 20,
      });
    }
  },
});
