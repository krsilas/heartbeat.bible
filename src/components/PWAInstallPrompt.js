import { useState, useEffect } from "react";

export function useAddToHomescreenPrompt(){
  const [prompt, setState] = useState(null);

  const promptToInstall = () => {
    if (prompt) {
      document.cookie = "pwaprompt=false"
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
    if (prompt && !cookie) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return null;
  }

  return(
    <div className="p-4 m-4 bg-gray-100 w-100 rounded-lg text-gray-700 dark:bg-gray-900 dark:border-black dark:text-gray-400 select-none">
				Diese Website besitzt Appfunktionalität. Installiere sie auf deinem Homescreen, um sie zu verwenden, wenn du online bist.
				<div className="flex justify-end text-gray-800 mt-4 font-medium uppercase tracking-wider text-sm dark:text-indigo-200 dark:opacity-75">
					<span className="p-2" onClick={hide}>Nein, danke</span>
					<span className="mx-3 px-3 py-2 rounded bg-gray-300 active:bg-gray-400 dark:active:bg-gray-900 dark:bg-gray-800 dark:border-black hover:cursor-pointer" onClick={promptToInstall}>Installieren</span>
				</div>
			</div>
  );
}