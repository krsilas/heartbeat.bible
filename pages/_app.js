import '../styles/index.css'
import MorphTransition from 'nextjs-morph-page';
import React from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  constructor(){
    super();
    this.state = {
      meta: 'width=device-width, initial-scale=1.0',
      themeColor: '#FCFDFD'
    }
  }
  componentDidMount(){
    if (window.matchMedia('(display-mode: standalone)').matches){
      this.setState({meta: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'}) 
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      this.setState({themeColor: '#232323'}) 
    }
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>heartbeat.bible</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={this.state.themeColor} />
          <meta name="description" content="Der Mensch lebt nicht vom Brot allein, sondern von jedem Wort, das aus dem Mund Gottes kommt." />
          <meta name='viewport' content={this.state.meta} />
          <link rel="apple-touch-icon" href="/images/icons/icon-512x512.png"></link>
          <link rel="preload" href="/fonts/FiraCode-VF.woff2?v=2.0" as="font" crossOrigin="true" />
          <link rel="preload" href="/fonts/Inter-VF.woff2?v=3.11" as="font" crossOrigin="true" />
        </Head> 
        <MorphTransition timeout={0} classNames="morph">
        <Component {...pageProps} />
        </MorphTransition>
      </>
    )
  }
}