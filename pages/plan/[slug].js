import CheckItem from '../../src/components/CheckItem'
import VideoItem from '../../src/components/VideoItem'
import SectionHeader from '../../src/components/SectionHeader'
import Link from 'next/link'
import Head from 'next/head'
import localforage from 'localforage'
import colors from '../../src/colors'
import { useState, useEffect } from 'react'
import TopBar from '../../src/components/TopBar'

const Plan = ({ title, plan, slug, color, introduction, credits }) => {
  const [ days, setDays ] = useState([]);
  const [ introOpen, setIntroOpen ] = useState(true)

  const isArray = (arr) => (arr && arr.length > 0)
  const isChecked = (day) => isArray(days) ? days.includes(day) : false

  function handleClick(day) {
    let buffer = days ? days : []
    if (buffer.includes(day)) {
      buffer.splice(buffer.indexOf(day), 1)
    } else { buffer.push(day) }
    buffer.sort((a,b)=>a-b)
    setDays([...buffer])
    save()
  }

  function save() { localforage.setItem(slug, days); }

  useEffect(()=>{
    localforage.getItem(slug).then((value)=>{
      if (value === null){
        localforage.setItem(slug, days)
      } else {
        setDays(value)
      }
    }).catch((err)=>{
      console.error(err)
      localforage.setItem(slug, [])
    })
  }, [])

  return (
    <>
    <Head>
      <link rel="preload" href={`https://heartbeat.bible/de/${slug}.json`} as="fetch" crossOrigin="true" />
    </Head>
    <TopBar className={colors[color]} back={true} />
    
    <div className="md:pt-2">
      <header 
        onClick={(e)=>e.preventDefault()} 
        className={`${colors[color]} bg-opacity-30 dark:bg-opacity-20 flex items-center w-full min-h-48 px-5 pr-6 pb-4 select-none max-w-xl md:mx-auto`}>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight darker">{title}</h1>
      </header>

      <main className={`px-1 text-gray-800 dark:text-gray-300`}>
      { 
        introduction && (<div className={`max-w-xl text-lg mx-auto mt-4 ${!introOpen ? '-mb-16 pb-10' : '-mb-8'} p-4 md:px-6 md:py-3`}>
          <div className="flex justify-between">
            <h4 className="font-bold uppercase text-2xl mb-4">{introduction.headline}</h4>
            <div onClick={()=>setIntroOpen(!introOpen)} className="hidden uppercase table text-xs rounded-full leading-tight block py-2 px-4 bg-gray-200 dark:bg-gray-800 dark:text-gray-200">{introOpen ? 'Ausblenden' : 'Anzeigen'}</div>
          </div>
          <section id="intro">
            { introOpen && <> {
                introduction.paragraphs.map((item, i)=>(
                  (item.length > 1) 
                  ? <div key={i}><h5 className="font-semibold mb-0">{item[0]}</h5><p className="leading-normal mb-6">{item[1]}</p></div>
                  : <div key={i}><p className="my-3">{item[0]}</p></div>
                )) }
                {/* <div onClick={()=>setIntroOpen(false)} className="text-center text-lightblue-500 font-medium w-full block flex items-center">
                  <svg className="h-5 mr-2 -mt-px text-lightblue-500 opacity-90 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  Einleitung verbergen
                </div> */}
              </>
            }
          </section>
        </div>) 
      }


      {/* List */}
      <div className="max-w-xl mx-auto">
        <ul className="p-4 md:px-6 md:py-3 rounded-sm">

        {plan.map((item, i)=>(
          item.day 
          ? <CheckItem key={i} color={color} checked={isChecked(item.day)} handleClick={()=>handleClick(item.day)}>
              {item.chapters.map((entry, i)=><p key={i}>{entry}</p>)}
            </CheckItem>
            : <Item item={item} key={i} />
          ))}

        </ul>
      </div>
      {/* End List */}
      </main>
    </div>
    </>
  );
}

const Item = (props) => {
  const { item } = props
  if (item.type === 'video'){
     return (
       <VideoItem data={{ text: item.text, link: item.link }} />
     )
   } else if (item.type === 'header') {
     return (
       <SectionHeader data={{text: item.text}} />
     )
   }
}

export async function getStaticPaths() {
  const paths = ["365", "30nt", "systematic"]
  return {
    fallback: false,
    paths: paths.map((slug) => ({ params: { slug } }))
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await fetch(`${process.env.BASE_URL}/de/${slug}.json`);
  const data = await res.json();
  return {
    props:{ ...data, slug }
  };
};

export default Plan;