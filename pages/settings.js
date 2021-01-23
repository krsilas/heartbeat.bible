import TopBar from '../src/components/TopBar'
import { useEffect, useState } from 'react'
import localforage from 'localforage'
import { useTheme } from '../src/utils'
import { useRouter } from 'next/router'

const Settings = ({strings}) => {
  const [ recEnabled, setRec ] = useState(false)
  const [ webShareAvailable, setWebShareAvailability ] = useState(false)
  const router = useRouter()
  
  const [theme, setTheme] = useTheme()
  const [language, setLanguage] = useState(router.locale)
  
  function changeLanguage(e) {
    setLanguage(e.target.value)
    router.push("/settings", "/settings", {locale: e.target.value})
    document.cookie = `NEXT_LOCALE=${e.target.value}`
  }

  function handleRec() {
    localforage.setItem('recEnabled', !recEnabled);
    setRec(!recEnabled)
  }
  function share() {
    if (navigator.share) {
      navigator.share({
        title: 'heartbeat.bible',
        text: '',
        url: 'https://heartbeat.bible/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }
  useEffect(()=>{
    if (navigator.share) { setWebShareAvailability(true) }
    localforage.getItem('recEnabled').then(value=>{
      if (value === null) {
        localforage.setItem('recEnabled', true);
        setRec(true)
      } else { setRec(value) }
    }).catch(()=>{
      setRec(true)
    })
  }, [])
  return(
  <>
  <TopBar back={true} />
  <div className="px-5 mt-6 mx-auto max-w-xl dark:text-gray-300">
    
    <h1 className="text-2xl font-semibold mb-4 dark:text-orange-100">{strings.settings}</h1>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="py-1 leading-relaxed">{strings.theme}</span>
        <select onChange={(e)=>setTheme(e)} value={theme} className="mt-1 block px-3 py-2 w-1/2 rounded-md bg-gray-50 border-gray-300 shadow-sm text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-600 dark:text-gray-500">
          <option value="os">{strings.system}</option>
          <option value="light">{strings.light}</option>
          <option value="dark">{strings.dark}</option>
        </select>
      </div>
      <div className="flex justify-between">
        <span className="py-1 leading-relaxed">{strings.language}</span>
        <select defaultValue={language}
          onChange={(e)=>changeLanguage(e)} 
          className="mt-1 block px-3 py-2 w-1/2 rounded-md bg-gray-50 border-gray-300 shadow-sm text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-600 dark:text-gray-500">
          <option value="de">Deutsch</option>
          <option value="fr">Français (en partie)</option>
          <option disabled>English (coming soon)</option>
          <option disabled>Español (próximamente)</option>
        </select>
      </div>
      <div className="flex justify-between">
        <span className="py-1 leading-relaxed">{strings.showRecommendations}</span>
        <input onChange={handleRec} className="rounded-md border-2 h-6 w-6 focus:ring-offset-0 focus:ring-green-600 m-1 text-green-500 bg-transparent focus:border-0" type="checkbox" checked={recEnabled}/>
      </div>
    </div>
    <a 
      href="https://docs.google.com/spreadsheets/d/10VISzPQcj4w3r2g8Qe6oH_LoGGTDBh0yz-klRiXxj2g/edit?usp=sharing" 
      className="mt-8 inline-block focus:ring-2 ring-lightblue-700 focus:outline-none w-full text-center bg-blue-200 dark:bg-opacity-30 dark:text-blue-100 bg-opacity-80 text-blue-900 px-3 py-3 rounded-xl" 
      target="_blank" 
      rel="nofollow norefferer">
        Help me translate heartbeat.bible
    </a>
  { webShareAvailable && <button onClick={share} className="mt-4 bg-opacity-75  text-green-900 font-medium w-full text-center bg-green-300 px-3 py-3 rounded-xl dark:bg-green-900 dark:border-green-800 dark:text-green-100">{strings.share}</button> }
  </div>
  </>
  )
}

export const getStaticProps = ({ locale }) => {
  const strings = require(`../public/${locale}/settings.json`)
  return {
    props: {strings},
  }
}

export default Settings