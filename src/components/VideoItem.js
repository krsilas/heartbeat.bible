import Image from 'next/image'
export default function VideoItem(props) {
  const {text, link} = props.data
  function youtubeId(link){
    return link.split("?v=")[1]
  }
  return (
    <>
      <a href={link} className="flex rounded-big mt-6 mb-2 relative w-64 overflow-hidden shadow-md">
        <div className="w-full shadow-sm">
          <Image layout="responsive" className="w-full opacity-75" height="360" width="640" src={`https://img.youtube.com/vi/${youtubeId(link)}/maxresdefault.jpg`} alt={text} />
        </div>
        <div className="bg-red-600 bg-opacity-20 w-full h-full absolute top-0 text-white flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
        </div>
      </a>
      <style>{`
        svg {
          -webkit-filter: drop-shadow(0px 1px 8px #22000030);
          filter: drop-shadow(0px 1px 8px #22000030);
        }
      `}</style>
    </>
  );
}

const old = (
  <div className="inline-flex mt-4 px-3 py-2 pr-6 -ml-2 mb-2 bg-gray-200 items-center hover:cursor-pointer rounded-lg dark:bg-black">
  <p className="font-sans hyphen-auto text-gray-900 dark:text-gray-400">
    <svg className="fill-current rounded text-gray-700 dark:text-gray-500 inline mr-3" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{marginTop: -1, marginLeft: 2, padding: 3}}> 
      <path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/>
    </svg>
    <span className="leading-loose pt-2"></span>
  </p>
  </div>
)