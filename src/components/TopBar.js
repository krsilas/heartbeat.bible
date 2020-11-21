import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useViewportScroll } from 'framer-motion'

const TopBar = (props) => {
  const { scrollY } = useViewportScroll()
  const [ offsetTop, setOffsetTop] = useState(scrollY.get())
  useEffect(() => scrollY.onChange(latest => {
    setOffsetTop(latest)
  }), [])
  return (
    <>
      <div className={`w-full h-14 px-2 py-3 bg-white border-b transition duration-300 ${offsetTop > 5 ? `border-gray-200` : `border-white` } font-semibold fixed z-50`}>
        { props.back &&
          <Link href="/" scroll={false}><a className="text-blue-900 pb-px text-2xl select-none rounded-lg px-1 mx-1 tap-none desaturate-75 active:bg-lightblue-500 active:bg-opacity-25">{`<-`}</a></Link> 
        }
        {props.children}
        
      </div>
      <div className="h-12 mb-2 w-full"></div>
    </>
  )
}
export default TopBar