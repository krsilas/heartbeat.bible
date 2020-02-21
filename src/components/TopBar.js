import Link from 'next/link'

const TopBar = (props) => {
  return (
    <>
      <div className="w-full h-14 desaturate px-2 py-3 bg-blur border-b font-semibold font-mono fixed dark:text-gray-400 dark:border-gray-800 z-50">
        { props.back &&
          <Link href="/" scroll={false}><a className="opacity-75 text-2xl select-none rounded-lg px-1 tap-none active:bg-gray-400 leading-snug dark:active:bg-gray-800">{`<-`}</a></Link> 
        }
        {props.children}
      </div>
      <div className="h-12 mb-3 w-full"></div>
    </>
  )
}
export default TopBar