import Link from 'next/link'

const TopBar = (props) => {
  return (
    <>
      <div className={`w-full px-4 py-2 bg-blur border-b font-bold text-2xl font-fira fixed dark:text-gray-400 dark:border-gray-700 ${props.className}`}>
        <Link href="/"><a className="opacity-75">{`<-`}</a></Link>
      </div>
      <div className="h-12 mb-3 w-full"></div>
      <style jsx>{`
      .font-fira { 
        font-family: "Fira Code" 
      }
      .bg-blur {
        filter: saturate(75%);
        backdrop-filter: blur(8px) saturate(70%);
        background-color: rgba(255,255,255,0.5);
      }
      @media(prefers-color-scheme: dark) {
        .bg-blur {
          backdrop-filter: blur(8px) saturate(70%) contrast(80%);
          background-color: rgba(0,0,0,0.5);
        }
      }
    `}</style>
    </>
  )
}
export default TopBar