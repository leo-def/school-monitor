import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppMessage } from '@/message/_components/appMessage'
import { AppLoader } from './_components/appLoader'
import { AppProvider } from './_components/appProvider'
import { ProtectedComponent } from '@/auth/_components/protectedComponent'
import { PrivateLayoutProps, PrivateLayout } from './_layouts/privateLayout'
import { PublicLayoutProps, PublicLayout } from './_layouts/publicLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'School Monitor',
  description: 'School monitor system',
}

export default function RootLayout(props: PrivateLayoutProps | PublicLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <AppLoader />
          <AppMessage />
          <ProtectedComponent
            renders={{
              protected: (<PrivateLayout {...props as PrivateLayoutProps} />),
              public: (<PublicLayout {...props as PublicLayoutProps} />)
            }}
          />
        </AppProvider >
      </body>
    </html>
  )
}
