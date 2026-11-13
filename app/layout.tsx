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
            widgetId: '6af70eb4cbd211d64b9ed2fb',
            name: 'Junior Costa',
            type: 'bubble',
            domain: 'localhost:3000',
            allowedDomain: 'localhost:3000',
            apiBaseUrl: 'https://assist-hero-app-backend-staging-1.onrender.com',
            loaderScriptUrl:
              'https://assist-hero-app-backend-staging-1.onrender.com/api/widgets/6af70eb4cbd211d64b9ed2fb/logic?type=bubble',
            generatedAt: '2026-11-13T13:21:15.306Z',
            knowledgeBases: ['scare-floor-cap-uniform'],
            theme: {
              mode: 'custom',
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
              widgetId: '6af70eb4cbd211d64b9ed2fb',
              type: 'bubble',
              apiUrl: 'https://assist-hero-app-backend-staging-1.onrender.com'
            };
            var script = document.createElement('script');
            script.src = 'https://assist-hero-app-backend-staging-1.onrender.com/api/widgets/6af70eb4cbd211d64b9ed2fb/logic?type=bubble';
            script.async = true;
            document.head.appendChild(script);
          })();`}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
