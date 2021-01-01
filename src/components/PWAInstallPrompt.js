import { useState, useEffect } from "react";
import { isIOSSafari } from '../utils'

export function useAddToHomescreenPrompt(){
  const [prompt, setState] = useState(null)
  const promptToInstall = () => {
    if (prompt) {
      document.cookie = "pwaprompt=false"
      window?.splitbee?.track("Install PWA")
      return prompt.prompt();
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    );
  };

  useEffect(() => {
    const ready = (e) => {
      console.warn('beforeinstallprompt initialized')
      e.preventDefault();
      setState(e);
    };

    window.addEventListener("beforeinstallprompt", ready);

    return () => {
      window.removeEventListener("beforeinstallprompt", ready);
    };
  }, []);

  return [prompt, promptToInstall];
}

export default function PWAInstallPrompt() {
	const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  const hide = () => { 
    setVisibleState(false)
    document.cookie = "pwaprompt=false"
  };

  useEffect(() => {
    const cookie = document && document.cookie.indexOf('pwaprompt=false') != -1;
    if ((isIOSSafari || prompt) && !cookie) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return null;
  }

  return(
    <div style={{fontVariationSettings: "'wght' 420"}} className="p-4 m-4 leading-snug bg-gray-100 w-100 rounded-lg text-gray-700 dark:bg-gray-900 dark:border-black dark:text-gray-400 select-none">
        Diese Website besitzt Appfunktionalität. Du kannst sie von deinem Homescreen aus starten und offline verwenden.
        { isIOSSafari() && <div>
            Gehe auf<svg className="h-4 -mt-1 mx-2 inline text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve"><path fill="currentColor" d="M780,290H640v35h140c19.3,0,35,15.7,35,35v560c0,19.3-15.7,35-35,35H220c-19.2,0-35-15.7-35-35V360c0-19.2,15.7-35,35-35h140v-35H220c-38.7,0-70,31.3-70,70v560c0,38.7,31.3,70,70,70h560c38.7,0,70-31.3,70-70V360C850,321.3,818.7,290,780,290z M372.5,180l110-110.2v552.7c0,9.6,7.9,17.5,17.5,17.5c9.6,0,17.5-7.9,17.5-17.5V69.8l110,110c3.5,3.5,7.9,5,12.5,5s9-1.7,12.5-5c6.8-6.8,6.8-17.9,0-24.7l-140-140c-6.8-6.8-17.9-6.8-24.7,0l-140,140c-6.8,6.8-6.8,17.9,0,24.7C354.5,186.8,365.5,186.8,372.5,180z"/></svg>
            und wähle "<em style={{fontVariationSettings: "'wght' 420, 'slnt' -5"}}>Zum Home-Bildschirm</em>"
        </div>}
        
				<div className="flex justify-end text-gray-800 mt-4 font-medium uppercase tracking-wide text-sm dark:text-indigo-200 dark:opacity-75">
					<span className="p-2" onClick={hide}>Nein, danke</span>
          {!isIOSSafari() && <span className="ml-2 mr-1 px-3 py-2 rounded bg-gray-200 active:bg-gray-400 dark:active:bg-gray-900 dark:bg-gray-800 dark:border-black hover:cursor-pointer" onClick={promptToInstall}>Installieren</span> }
				</div>
			</div>
  );
}