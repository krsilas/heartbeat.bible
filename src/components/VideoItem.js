import Link from 'next/link'

export default function VideoItem(props) {
  const {text, link} = props.data
  return (
    <>
      <Link href={link}>
        <div className="inline-flex mt-2 px-3 py-4 -ml-1 mb-3 w-full bg-gray-300 border-l-4 border-gray-600 items-center hover:cursor-pointer rounded-px dark:bg-gray-800">
        <p className="font-sans leading-tight hyphen-auto">
          <svg className="fill-current text-red-600 dark:text-red-500 inline mr-3 align-top" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{marginTop: 1}}>    
            <path d="M21,5c0,0-3-1-9-1S3,5,3,5s-1,3-1,7s1,7,1,7s3,1,9,1s9-1,9-1s1-3,1-7S21,5,21,5z M10,15.464V8.536L16,12L10,15.464z">
            </path>
          </svg> 
          {text} <span className="align-top text-sm text-gray-600 inline-block">↗</span>
        </p>
        </div>
      </Link>
      <style jsx>{`
        
      `}</style>
    </>
  );
}