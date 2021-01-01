import { useState, useEffect } from 'react'

export default function CookieNotice(){
	const [isVisible, setVisibleState] = useState(false);

  const hide = () => { 
    setVisibleState(false)
    document.cookie = "cookiebanner=false"
  };

  useEffect(() => {
    if (!document?.cookie.includes('cookiebanner')) {
      setVisibleState(true);
		}
  }, []);

  if (!isVisible) {
    return null;
	}
	return (
		<div style={{fontVariationSettings: "'wght' 420"}} className="p-4 text-sm m-4 mt-7 flex items-center leading-snug bg-gray-100 w-100 rounded-lg text-gray-700 dark:bg-gray-900 dark:border-black dark:text-gray-400 select-none">
			Wir verwenden Cookies, um dein Benutzer&shy;er&shy;leb&shy;nis zu verbessern.
			<button onClick={hide} className="text-gray-800 mx-1 flex flex-shrink-0 tracking-wide dark:opacity-75 text-sm font-medium px-3 py-2 rounded bg-gray-200 active:bg-gray-400 dark:active:bg-gray-900 dark:bg-gray-800 dark:border-black hover:cursor-pointer">
			🍪&nbsp;OK 
			</button>
		</div>
	)
}
