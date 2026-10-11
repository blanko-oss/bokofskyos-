import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'BOKOFSKY OS | Take Control. Keep Your Edge.', template: '%s | BOKOFSKY OS' },
  description: 'A Windows gaming toolbox built around visibility, control, and a red-lined cyberpunk interface.',
  applicationName: 'BOKOFSKY OS',
  keywords: ['BOKOFSKY OS', 'Windows utility', 'gaming toolbox', 'Windows 11'],
  robots: { index: true, follow: true },
  openGraph: { title: 'BOKOFSKY OS', description: 'Take control. Keep your edge.', type: 'website', siteName: 'BOKOFSKY OS' },
};
export const viewport: Viewport = { themeColor: '#090909', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
