import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import Footer from '../src/components/Footer'

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
          <Footer />
        </body>
      </Html>
    )
  }
}
export default MyDocument