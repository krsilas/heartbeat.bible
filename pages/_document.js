import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="de">
        <Head></Head>
        <body className="flex flex-col font-sans min-h-screen">
          <main style={{ flex:' 1 0 auto'}}>
            <Main />
            <NextScript />
          </main>
          <footer className="bottom-0 px-4 md:px-6 py-2 text-sm flex justify-between max-w-xl mx-auto mt-6 w-full flex-shrink-0">
            <span className="dark:text-gray-200">&copy;2020 heartbeat.bible </span>
            <Link href="/legal"><a className="rounded bg-gray-300 dark:bg-gray-800 py-1 px-2">Legal</a></Link>
          </footer> 
        </body>
      </Html>
    )
  }
}
export default MyDocument