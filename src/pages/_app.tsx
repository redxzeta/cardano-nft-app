import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'

import React from 'react'
import type, { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { MessageProvider } from '~/lib/message'

function MyApp({ Component, pageProps }: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = { ...SEO, ...pageMeta }
  const x = 'WOW'
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <MessageProvider>
       <Yayeet hello={x}/> 
        <Component {...pageProps} />
      </MessageProvider>
    </React.Fragment>
  )
}

export default MyApp

type wowProps = {
  hello: string;
}

const Yayeet:React.FC<wowProps> =({hello})=><h1>{hello}</h1>