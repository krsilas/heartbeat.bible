import CheckItem from '../../src/components/CheckItem'
import VideoItem from '../../src/components/VideoItem'
import SectionHeader from '../../src/components/SectionHeader'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Head from 'next/head'
import localforage from 'localforage'
import { colors, darken, lighten } from '../../src/utils'
import { useState, useEffect } from 'react'
import TopBar from '../../src/components/TopBar'

const Plan = (props) => {
  const { title, plan, slug, color, introduction, credits } = props;
  const [ days, setDays ] = useState([]);
  const [ introOpen, setIntroOpen ] = useState(false)

  const isArray = (arr) => (arr && arr.length > 0)
  const isChecked = (day) => isArray(days) ? days.includes(day) : false
  const headerRef = React.createRef();
  const [plans, setPlans] = useState([])
  useEffect(()=>{
    //setTimeout(1000)
    setPlans(plan)
  },[plan])

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
    headerRef.current.classList.forEach((cN)=>{
      cN.includes('active:') && headerRef.current.classList.remove(cN)
    })
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
    
    <div className="dark:text-gray-300 p-2 pb-0 -mb-6">
      <header ref={headerRef} onClick={(e)=>e.preventDefault()} id={`morph-${slug}`} data-morph-ms="150" className={`flex rounded-lg border items-center pb-4 w-full max-w-xl mx-auto ${colors[color]}`} style={{minHeight: '12rem'}}>
        <h1 className="p-4 mt-6 font-mono text-4xl font-semibold leading-tight tracking-tight text-color select-none">{title}</h1>
      </header>

      { 
        introduction && (<div className={`max-w-xl text-lg mx-auto mt-4 ${!introOpen ? '-mb-16 pb-10' : '-mb-8'} p-4 md:px-6 md:py-3`}>
          <div className="flex justify-between">
            <h4 className="font-extrabold uppercase text-2xl mb-4">{introduction.headline}</h4>
            <div onClick={()=>setIntroOpen(!introOpen)} className="uppercase table text-xs rounded-full leading-tight block py-2 px-4 bg-gray-300 dark:bg-gray-800 dark:text-gray-200">{introOpen ? 'Ausblenden' : 'Anzeigen'}</div>
          </div>
          {
            introOpen && introduction.paragraphs.map((item, i)=>(
              (item.length > 1) 
            ? <div key={i}><h5 className="font-semibold mb-0">{item[0]}</h5><p className="text-gray-800 mb-6 dark:text-gray-400">{item[1]}</p></div>
            : <div key={i}><p className="text-gray-800 my-3 dark:text-gray-400">{item[0]}</p></div>
            ))
          }
        </div>) 
      }


      {/* List */}
      <div className="max-w-xl mx-auto">
        <ul className="p-4 md:px-6 md:py-3 rounded-sm">

        {plans.map((item, i)=>(
          item.day 
          ? <CheckItem key={i} checked={isChecked(item.day)} handleClick={()=>handleClick(item.day)}>
              {item.chapters.map((entry, i)=><p key={i}>{entry}</p>)}
            </CheckItem>
            : <Item item={item} key={i} />
          ))}

        </ul>
      </div>
      {/* End List */}

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
  const baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'https://heartbeat.bible';
  const { slug } = context.params;
  const res = await fetch(`${baseURL}/de/${slug}.json`);
  const data = await res.json();
  return {
    props:{ ...data, slug }
  };
};

export default Plan;