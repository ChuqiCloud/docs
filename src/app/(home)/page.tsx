import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            云上极致帮助中心
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-8">
            欢迎来到云上极致的官方文档和帮助中心。在这里您可以找到产品使用指南、API文档、最佳实践和常见问题解答。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors"
            >
              开始使用文档
            </Link>
            <Link
              href="/docs/qimenidc"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fd-foreground bg-fd-secondary border border-fd-border rounded-md hover:bg-fd-secondary/80 transition-colors"
            >
              QimenIDC 产品
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-fd-card border border-fd-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">产品文档</h3>
            <p className="text-fd-muted-foreground">
              详细的产品使用指南和功能说明，帮助您快速上手并充分利用我们的服务。
            </p>
          </div>

          <div className="p-6 bg-fd-card border border-fd-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">API 参考</h3>
            <p className="text-fd-muted-foreground">
              完整的 API 文档和代码示例，帮助开发者快速集成我们的服务。
            </p>
          </div>

          <div className="p-6 bg-fd-card border border-fd-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">技术支持</h3>
            <p className="text-fd-muted-foreground">
              常见问题解答、故障排除指南和联系技术支持的方式。
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-fd-secondary/30 border border-fd-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">快速链接</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/docs/qimenidc/installation" 
              className="group flex items-center justify-between p-4 bg-fd-card border border-fd-border rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200"
            >
              <span className="text-fd-foreground group-hover:text-blue-500 transition-colors">安装指南</span>
              <svg className="w-4 h-4 text-fd-muted-foreground group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/docs/qimenidc/what-is-qimenidc" 
              className="group flex items-center justify-between p-4 bg-fd-card border border-fd-border rounded-lg hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-200"
            >
              <span className="text-fd-foreground group-hover:text-green-500 transition-colors">产品介绍</span>
              <svg className="w-4 h-4 text-fd-muted-foreground group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/docs/qimenidc/integrations" 
              className="group flex items-center justify-between p-4 bg-fd-card border border-fd-border rounded-lg hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-200"
            >
              <span className="text-fd-foreground group-hover:text-purple-500 transition-colors">集成方案</span>
              <svg className="w-4 h-4 text-fd-muted-foreground group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/docs/qimenidc/comparisons" 
              className="group flex items-center justify-between p-4 bg-fd-card border border-fd-border rounded-lg hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-200"
            >
              <span className="text-fd-foreground group-hover:text-orange-500 transition-colors">产品对比</span>
              <svg className="w-4 h-4 text-fd-muted-foreground group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
