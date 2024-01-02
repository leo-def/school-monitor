import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { AppProps } from "next/app";
import { I18nWrapper } from "@/commons/i18n/_components/i18nWrapper";
import { AppMessage } from "@/commons/message/_components/appMessage";
import { ProtectedComponent } from "@/auth/_components/protectedComponent";
import { AppLoader } from "./_components/appLoader";
import { AppProvider } from "./_components/appProvider";
import { PrivateLayoutProps, PrivateLayout } from "./_layouts/privateLayout";
import { PublicLayoutProps, PublicLayout } from "./_layouts/publicLayout";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'School Monitor',
  description: 'School monitor system',
}

export type RootLayoutProps = PrivateLayoutProps & PublicLayoutProps & AppProps

export default function RootLayout(props: RootLayoutProps) {
  return (<I18nWrapper>
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
  </I18nWrapper>)
}


