import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  Database,
  HardDrive,
  LifeBuoy,
  Network,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

const productLinks = [
  {
    name: 'QimenIDC',
    description: '多云管理与混合云融合系统，覆盖安装、部署、集成和运维安全。',
    href: '/docs/qimenidc',
    icon: Server,
    tone: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    name: 'AcmeCOS',
    description: '对象存储服务文档，帮助您快速理解存储能力与接入方式。',
    href: '/docs/acmecos',
    icon: HardDrive,
    tone: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    disabled: true,
  },
  {
    name: 'AcmeEdge',
    description: '边缘网络产品入口，聚合边缘能力的入门与配置说明。',
    href: '/docs/acmeedge',
    icon: Network,
    tone: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    disabled: true,
  },
  {
    name: 'AcmeDataBase',
    description: '数据库服务快速入门，查看基础概念、使用方式和产品说明。',
    href: '/docs/acmedatabase',
    icon: Database,
    tone: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    disabled: true,
  },
];

const quickLinks = [
  { title: '安装 QimenIDC', href: '/docs/qimenidc/installation', icon: TerminalSquare },
  { title: '了解 QimenIDC', href: '/docs/qimenidc/what-is-qimenidc', icon: BookOpen },
  { title: '魔方财务', href: '/docs/qimenidc/integrations/idcsmart', icon: Boxes },
  { title: '产品对比', href: '/docs/qimenidc/comparisons', icon: CheckCircle2 },
];

const supportLinks = [
  { title: '安全说明', description: '查看安全策略、权限建议与部署注意事项。', href: '/docs/qimenidc/safe', icon: ShieldCheck },
  { title: '双因素认证', description: '配置 2FA，提升控制台账号保护强度。', href: '/docs/qimenidc/2fa', icon: Sparkles },
  { title: '镜像源替换', description: '解决 PVE 环境安装源访问慢或不可用的问题。', href: '/docs/qimenidc/replace-mirror-source', icon: LifeBuoy },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-fd-border bg-fd-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[minmax(0,1fr)_360px] md:py-16 lg:px-8">
          <div className="flex min-w-0 flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-md border border-fd-border bg-fd-muted/40 px-3 py-1 text-sm text-fd-muted-foreground">
              <BookOpen className="h-4 w-4 text-blue-500" />
              云上极致官方文档中心
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-fd-foreground md:text-6xl">
              更快找到产品接入、部署和运维答案
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-fd-muted-foreground md:text-lg">
              汇总云上极致产品文档、QimenIDC 安装指南、集成方案与常见问题。面向实际交付场景组织内容，减少来回查找成本。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/docs/qimenidc/installation"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                查看安装指南
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/qimenidc/integrations/idcsmart"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-fd-border bg-fd-card px-5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-muted"
              >
                魔方财务对接
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-fd-border bg-fd-card p-5 shadow-sm">
            <div className="flex items-center gap-3 border-b border-fd-border pb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-blue-500/20 bg-blue-500/10">
                <Search className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-fd-foreground">常用路径</h2>
                <p className="text-sm text-fd-muted-foreground">从高频任务直接进入</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-md border border-transparent px-3 py-3 text-sm transition-colors hover:border-fd-border hover:bg-fd-muted"
                  >
                    <span className="flex min-w-0 items-center gap-3 font-medium text-fd-foreground">
                      <Icon className="h-4 w-4 shrink-0 text-fd-muted-foreground transition-colors group-hover:text-blue-500" />
                      <span className="truncate">{item.title}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-blue-500" />
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-8">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-fd-foreground">产品文档</h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">按产品进入对应手册，快速定位入门、配置和最佳实践。</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {productLinks.map((product) => {
            const Icon = product.icon;

            if (product.disabled) {
              return (
                <div
                  key={product.href}
                  aria-disabled="true"
                  className="group relative cursor-not-allowed rounded-lg border border-fd-border bg-fd-card p-5 opacity-70 transition-colors hover:bg-fd-muted/30"
                >
                  <span className="pointer-events-none absolute right-4 top-4 rounded-md border border-fd-border bg-fd-background px-2 py-1 text-xs font-medium text-fd-muted-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    尽请期待
                  </span>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border ${product.tone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pr-16">
                      <h3 className="font-semibold text-fd-foreground">{product.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={product.href}
                href={product.href}
                className="group rounded-lg border border-fd-border bg-fd-card p-5 transition-colors hover:border-blue-500/40 hover:bg-fd-muted/40"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border ${product.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-fd-foreground">{product.name}</h3>
                      <ArrowRight className="h-4 w-4 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-blue-500" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{product.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-fd-border bg-fd-muted/25">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-10 md:grid-cols-3 lg:px-8">
          {supportLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-fd-border bg-fd-card p-5 transition-colors hover:border-blue-500/40"
              >
                <Icon className="h-5 w-5 text-blue-500" />
                <h3 className="mt-4 font-semibold text-fd-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8">
        <div className="flex flex-col justify-between gap-3 text-sm text-fd-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} 云上极致（深圳）互联网有限公司 版权所有</p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fd-foreground"
          >
            粤ICP备2025436238号
          </a>
        </div>
      </footer>
    </main>
  );
}
