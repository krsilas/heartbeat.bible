import { useEffect, useState } from "react";
import Link from 'next/link'

const Footer = () => {
    const [isStandalone, setStandalone] = useState(true)
    useEffect(()=>{
        if (window.matchMedia('(display-mode: standalone)').matches || typeof window.navigator.standalone !== 'undefined') {
            setStandalone(true)
        } else setStandalone(false)
    }, [])
    return (
        <footer className={`${isStandalone ? 'hidden' : 'flex' } bottom-0 px-4 md:px-6 py-2 text-sm justify-between max-w-xl mx-auto mt-6 w-full flex-shrink-0`}>
            <span className="dark:text-gray-200">&copy;2020 heartbeat.bible</span>
            <Link href="/legal"><a className="rounded bg-gray-300 dark:bg-gray-800 py-1 px-2">Legal</a></Link>
        </footer> 
    )
};
export default Footer;