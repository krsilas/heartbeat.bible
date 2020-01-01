import Link from 'next/link'

const TopBar = (props) => {
  return (
    <>
      <div className={`w-full desaturate px-2 py-2 bg-blur border-b font-bold text-2xl font-fira fixed dark:text-gray-400 dark:border-gray-700`}>
        <Link href="/"><a className="opacity-75 select-none rounded-lg px-1 tap-none active:bg-gray-400 dark:active:bg-gray-800">{`<-`}</a></Link>
      </div>
      <div className="h-12 mb-3 w-full"></div>
      <style jsx>{`
      .font-fira { 
        font-family: "Fira Code" 
      }
      .desaturate { filter: saturate(75%) }
      .bg-blur {
        backdrop-filter: blur(8px) saturate(70%);
        background-color: rgba(255,255,255,0.5);
      }
      @media(prefers-color-scheme: dark) {
        .bg-blur {
          backdrop-filter: blur(8px) saturate(70%) contrast(80%);
          background-color: rgba(30,30,30,0.5);
        }
      }
    `}</style>
    </>
  )
}
export default TopBar