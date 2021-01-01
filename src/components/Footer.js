import { useEffect, useState } from "react";
import Link from 'next/link'

const Footer = () => {
    const [isStandalone, setStandalone] = useState(true)
    useEffect(()=>{
        //typeof window === 'undefined'
        if (!window.matchMedia('(display-mode: standalone)').matches && window.navigator.standalone !== true) { setStandalone(false) } 
        else setStandalone(true);
    }, [])
    return (
        <footer className={`${isStandalone ? 'hidden' : 'flex' } bottom-0 px-6 py-3 text-sm justify-between max-w-xl mx-auto mt-4 w-full flex-shrink-0 tracking-tight`}>
          <div className="dark:text-gray-300 text-xs leading-relaxed opacity-80 mt-px tracking-tight">
            <svg className="inline-block opacity-90" height="9" width="9" style={{marginRight: 5}}>
							<rect width="9" height="9" fill="currentColor"></rect>            
						</svg>
            made by <a href="https://silas.digital">silas</a>
					</div>
          <Link href="/legal"><a className="underline text-lightblue-700 px-1">Impressum / Datenschutz</a></Link>
        </footer> 
    )
};
export default Footer;