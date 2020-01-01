import '../styles/index.css'
import MorphTransition from 'nextjs-morph-page';
import React, { useEffect } from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>heartbeat.bible</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#F7FAFC" />
          <meta name="description" content="Der Mensch lebt nicht vom Brot allein, sondern von jedem Wort, das aus dem Mund Gottes kommt." />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <link rel="preload" href="https://fonts.gstatic.com/s/firacode/v7/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKQ.woff" as="font" crossorigin/>
          <link rel="preload" href="https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.11" as="font" crossorigin />
          <link rel="preload" href="https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.11" as="font" crossorigin />
          <link rel="preload" href="https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.11" as="font" crossorigin />
        </Head> 
        <MorphTransition timeout={0} classNames="morph">
        <Component {...pageProps} />
        </MorphTransition>
      </>
    )
  }
}