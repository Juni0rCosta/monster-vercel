import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scream Supply — Power Your Scream',
  description: 'Monster-inspired essentials for big-night energy.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script type="application/json" id="assisthero-widget-embed-meta">
          {JSON.stringify({
            widgetId: '6abc15d9a5c30d9caf8993cd',
            name: 'monster',
            type: 'bubble',
            domain: 'monster-vercel-9rjz.vercel.app',
            allowedDomain: 'monster-vercel-9rjz.vercel.app',
            apiBaseUrl: 'http://localhost:4000/api',
            loaderScriptUrl: 'http://localhost:4000/api/widgets/6abc15d9a5c30d9caf8993cd/logic?type=bubble',
            generatedAt: '2026-09-29T19:49:50.292Z',
            useGraphV2: false,
            knowledgeBases: ['general-content'],
            theme: {
              mode: 'auto',
              primary: '#6366f1',
              onPrimary: '#ffffff',
              panelBackground: '#ffffff',
              botBubbleBackground: '#ffffff',
              botBubbleText: '#1e293b',
            },
          })}
        </script>
        <Script id="assisthero-widget-loader" strategy="afterInteractive">
          {`(function() {
            window.assistHeroWidgetConfig = {
              widgetId: '6abc15d9a5c30d9caf8993cd',
              type: 'bubble',
              apiUrl: 'http://localhost:4000/api'
            };
            var script = document.createElement('script');
            script.src = 'http://localhost:4000/api/widgets/6abc15d9a5c30d9caf8993cd/logic?type=bubble';
            script.async = true;
            document.head.appendChild(script);
          })();`}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
