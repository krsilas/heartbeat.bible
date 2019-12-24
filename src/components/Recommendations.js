import { useEffect, useState } from 'react'
import localforage from 'localforage'
export default () => {
    const [ recEnabled, setRec ] = useState(true)
    useEffect(()=>{
        localforage.getItem('recEnabled').then(value=>{
          setRec(value)
        })
      }, [])
    if (!recEnabled) return null
    return (
        <div className="my-12 mx-5 text-gray-900">
        <h3 className="text-lg mt-1 font-sans font-semibold border-gray-400 inline-block dark:text-gray-200 dark:border-gray-700">Empfehlungen</h3>

        <h4 className="mt-1 text-sm uppercase text-gray-700 dark:text-gray-400 font-semibold tracking-wider">Bücher</h4>
        <p className="text-sm font-light text-gray-700 tracking-wide inline-block mb-1 dark:text-gray-400">Falls du noch keine Bibel hast oder nur eine, die schwer verständlich ist, empfehle ich dir:</p>
        <Item title="Neues Leben. Die Bibel -&nbsp;Sonderausgabe" subtitle="SCM R.Brockhaus" img="/images/neues-leben.png" href="https://www.amazon.de/Neues-Leben-Die-Bibel-Sonderausgabe/dp/3417253799/" />
        
        <p className="mt-4 text-sm font-light text-gray-700 dark:text-gray-400 tracking-wide inline-block">Wenn du die Bibel besser verstehen willst, können dir diese Bücher weiterhelfen:</p>
        <Item title="Effektives Bibelstudium: Die Bibel verstehen und auslegen" subtitle="Douglas Stuart und Gordon D. Fee" img="/images/effektiv-bibel.png" href="https://www.amazon.de/Effektives-Bibelstudium-Bibel-verstehen-auslegen/dp/3765506028/" />
        <Item title="Sein Wort - meine Welt: Die Studienbibel für das 21. Jahrhundert" img="/images/elb-studienbibel.png" href="https://www.amazon.de/Sein-Wort-meine-Studienbibel-Jahrhundert/dp/3417255430/" />
        </div>
    )
}

const Item = (props) => {
    const { title, subtitle, img, href } = props;
    return (
        <a href={href} target="_blank" rel="noopener norefferer">
        <div className="flex text-gray-800 items-center px-2 py-2 bg-gray-200 dark:bg-gray-900 dark:border-gray-800 border-gray-300 border rounded-lg my-2">
            <img className="h-16 w-auto m-1 mr-2" src={img} width="100" height="100" alt="Image"/>
            <div className="py-1 flex-grow dark:text-gray-500">
                <h4 className="font-medium leading-tight pb-1">{title}</h4>
                <p className="font-light text-gray-600 text-sm">{subtitle}</p>
            </div>
            <svg className="m-2 text-gray-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
        </div>
    <style jsx>{`
    img {
        filter: drop-shadow(1px 2px 0.125rem #C4C8CC)
    }
    @media (prefers-color-scheme: dark){
        img {
            filter: drop-shadow(1px 2px 0.125rem #111) 
        }
    }
    `}</style>
        </a>
    )
}