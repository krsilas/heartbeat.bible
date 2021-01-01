import '../styles/index.css'
import React, { useState, useEffect, createContext } from 'react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import { AnimatePresence } from "framer-motion"
import { updateTheme, ThemeContext } from '../src/utils'

export default function MyApp({ Component, pageProps }) {
  
  const [meta, setMeta] = useState('width=device-width, initial-scale=1.0')
  const [themeColor, setThemeColor] = useState('#FFFFFF')
    
  function toggleThemeColor(theme){
    setThemeColor(theme == 'dark' ? '#000000' : '#FFFFFF')
  }
  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches){
      setMeta('width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0') 
    }
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setThemeColor('#000000') 
    }
    updateTheme()
  })
  return (
    <>
      <ThemeContext.Provider value={{toggleThemeColor}}>
      <Head>
        <title>heartbeat.bible</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={themeColor} />
        <meta name="description" content="Der Mensch lebt nicht vom Brot allein, sondern von jedem Wort, das aus dem Mund Gottes kommt." />
        <meta name='viewport' content={meta} />
        <link rel="apple-touch-icon" href="/images/icons/icon-512x512.png"></link>
        <link rel="preload" href="/fonts/Inter-VF.woff2?v=3.11" as="font" crossOrigin="true" />
        <link rel="preload" href="/de/365.json" as="fetch" />
        <link rel="preconnect" href="https://cdn.statically.io/" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </Head> 
      <div className="flex flex-col font-sans min-h-screen">
      <main style={{ flex: '1 0 auto'}}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </main>
      <Footer />
      </div>
      </ThemeContext.Provider>
    </>
  )
}