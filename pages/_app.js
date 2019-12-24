import '../styles/index.css'
import MorphTransition from 'nextjs-morph-page';
import React from 'react'
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
          <meta name="theme-color" content="#f7fafc" />
          <meta name="description" content="Der Mensch lebt nicht vom Brot allein, sondern von jedem Wort, das aus dem Mund Gottes kommt." />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <link href="https://fonts.googleapis.com/css?family=Fira+Code:400|700&display=swap" rel="stylesheet"></link>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>
        </Head> 
        <MorphTransition timeout={200} classNames="morph">
        <Component {...pageProps} />
        </MorphTransition>
      </>
    )
  }
}