import TopBar from '../src/components/TopBar'
import { useEffect, useState } from 'react'
import localforage from 'localforage'

export default () => {
  const [ recEnabled, setRec ] = useState(true)
  const [ webShareAvailable, setWebShareAvailability ] = useState(false)
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
  <div className="p-3 mt-3 mx-auto max-w-xl dark:text-gray-300">
    
    <h1 className="font-mono text-2xl font-semibold mb-4 dark:text-orange-100">Einstellungen</h1>
    <div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Erscheinungsbild</span>
        <select className="form-select mt-1 block px-2 py-1 w-1/2 font-mono text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-600 dark:text-gray-500">
          <option>Automatisch</option>
          <option disabled>Hell</option>
          <option disabled>Dunkel</option>
        </select>
      </div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Sprache</span>
        <select className="form-select mt-1 block px-2 py-1 w-1/2 font-mono text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-600 dark:text-gray-500">
          <option>Deutsch</option>
          <option disabled>English</option>
          <option disabled>Français</option>
          <option disabled>Español</option>
        </select>
      </div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Empfehlungen anzeigen</span>
        <input onChange={handleRec} className="form-checkbox h-6 w-6 m-1 text-green-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-green-500" type="checkbox" checked={recEnabled}/>
      </div>
    </div>
    <a href="https://docs.google.com/spreadsheets/d/10VISzPQcj4w3r2g8Qe6oH_LoGGTDBh0yz-klRiXxj2g/edit?usp=sharing" className="mt-8 inline-block text-grey-600 font-normal w-full text-center font-mono bg-gray-300 px-3 py-2 border border-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-700" target="_blank" rel="nofollow norefferer">Help me translate heartbeat.bible</a>
  { webShareAvailable && <div onClick={share} className="mt-6 hover:cursor-pointer inline-block text-grey-600 font-normal w-full text-center font-mono bg-green-300 px-3 py-2 border border-green-400 rounded-lg dark:bg-green-900 dark:border-green-800">App weiterempfehlen</div> }
  </div>
  </>
  )
}