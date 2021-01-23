import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useViewportScroll } from 'framer-motion'

const TopBar = (props) => {
  const { scrollY } = useViewportScroll()
  const [ offsetTop, setOffsetTop] = useState(0)
  //TODO:
  useEffect(() => scrollY.onChange(latest => {
    setOffsetTop(latest)
  }), [])
  return (
    <>
      <div className={`w-full h-14 px-2 py-3 bg-white dark:bg-black border-b transition transition-border ${offsetTop > 5 ? `border-gray-200 dark:border-gray-900` : `border-transparent` } font-semibold fixed z-50`}>
        { props.back &&
          <Link href="/"><a className="text-blue-900 dark:text-gray-300 pb-px text-2xl select-none rounded-lg px-1 mx-1 tap-none desaturate-75 active:bg-lightblue-500 active:bg-opacity-25">{`<-`}</a></Link> 
        }
        {props.children}
        
      </div>
      <div className="h-12 mb-2 w-full"></div>
    </>
  )
}
export default TopBar