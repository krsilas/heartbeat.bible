import TopBar from '../src/components/TopBar'
import { useEffect, useState } from 'react'
import localforage from 'localforage'

export default () => {
  const [ recEnabled, setRec ] = useState(true)
  function handleRec() {
    localforage.setItem('recEnabled', !recEnabled);
    setRec(!recEnabled)
  }
  useEffect(()=>{
    localforage.getItem('recEnabled').then(value=>{
      setRec(value)
    })
  }, [])
  return(
  <>
  <TopBar  />
  <div className="p-3 mt-3 mx-auto max-w-md dark:text-gray-300">
    
    <h1 className="font-mono text-2xl font-extrabold mb-4 dark:text-orange-100">Settings</h1>
    <div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Theme</span>
        <select className="form-select mt-1 block px-2 py-1 w-1/2 font-mono text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500">
          <option>System Default</option>
          <option disabled>Light</option>
          <option disabled>Dark</option>
        </select>
      </div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Sprache</span>
        <select className="form-select mt-1 block px-2 py-1 w-1/2 font-mono text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500">
          <option>Deutsch</option>
          <option disabled>English</option>
          <option disabled>Français</option>
          <option disabled>Español</option>
        </select>
      </div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Empfehlungen anzeigen</span>
        <input onChange={handleRec} className="form-checkbox h-6 w-6 m-1 text-green-500 dark:bg-gray-800 dark:border-gray-700" type="checkbox" checked={recEnabled}/>
      </div>
    </div>
    <a href="https://poeditor.com/join/project/8wFuvhJUOM" className="mt-8 inline-block text-grey-600 font-medium w-full text-center font-mono bg-gray-300 px-3 py-2 border border-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-700" target="_blank" rel="nofollow norefferer">Help me translate heartbeat.bible</a>
  </div>
  </>
  )
}