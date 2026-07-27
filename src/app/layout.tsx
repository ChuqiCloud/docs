import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import Script from 'next/script';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// 兼容 Node 25 中可能存在但不完整的服务端 localStorage。
if (typeof window === 'undefined' && typeof globalThis.localStorage?.getItem !== 'function') {
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: {
      length: 0,
      clear: () => undefined,
      getItem: () => null,
      key: () => null,
      removeItem: () => undefined,
      setItem: () => undefined,
    } satisfies Storage,
  });
}

// 1. 全站默认 SEO + 图标
export const metadata: Metadata = {
  title: {
    default: '云上极致帮助中心',          // 首页/未指定时的标题
    template: '%s | 云上极致帮助中心',    // 子页面：页面标题 | Acme Docs
  },
  description: '云上极致帮助中心：快速上手、API 参考与最佳实践。',
  icons: {
    icon: '/images/logo.png',      // favicon
    apple: '/images/logo.png',     // iOS 主屏图标
  },
  openGraph: {
    type: 'website',
    siteName: '云上极致帮助中心',
    images: '/images/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/logo.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen">
        {/* 统计脚本 */}
        <Script
          src="https://status.acmecloud.cn/tracker.js"
          data-website-id="cme47ya6u000a11i5z7i1oim7"
          strategy="afterInteractive"
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
