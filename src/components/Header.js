import Link from 'next/link'
import Logo from './Logo'

const Header = () => (
  <div id="header" className="bg-blend-excl w-full mb-4 rounded-full">
    <div className="px-4 py-4 flex justify-between max-w-xl mx-auto text-gray-900 dark:text-orange-100">
      <div className="flex"><Logo size="32" color="currentColor" /> <span className="font-bold font-mono ml-3 mt-1">heartbeat.bible</span></div>
      <Link href="/translation"><a className="text-xl mr-1">🇩🇪</a></Link>
    </div>
    <style jsx>{`
      @media all and (display-mode: standalone) {
        #header { display: block; }
      }
    `}</style>
  </div>
);
export default Header;