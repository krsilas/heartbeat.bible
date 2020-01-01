import CheckItem from '../../src/components/CheckItem'
import VideoItem from '../../src/components/VideoItem'
import SectionHeader from '../../src/components/SectionHeader'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import localforage from 'localforage'
import { colors, darken, lighten } from '../../src/utils'
import { useState, useEffect } from 'react'
import TopBar from '../../src/components/TopBar'

const Plan = (props) => {
  const { title, plan, slug, color } = props;
  const [ days, setDays ] = useState([]);

  const isArray = (arr) => (arr && arr.length > 0)
  const isChecked = (day) => isArray(days) ? days.includes(day) : false
  const headerRef = React.createRef();

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
      setDays(value)
    }).catch((err)=>{
      console.error(err)
    })
  }, [])

  return (
    <>
    <TopBar className={colors[color]} />
    
    <div className="dark:text-gray-300 p-2 pb-0 -mb-6">
      <header ref={headerRef} onClick={(e)=>e.preventDefault()} id={`morph-${slug}`} data-morph-ms="150" className={`flex rounded-lg border items-center h-48 pb-4 w-full max-w-xl mx-auto ${colors[color]}`}>
        <h1 className="p-4 mt-6  font-mono text-4xl font-bold leading-tight tracking-tight text-color select-none">{title}</h1>
      </header>

      {/* List */}
      <div className="max-w-xl mx-auto">
        <ul className="p-4 md:px-6 md:py-3 rounded-sm">

        {plan.map((item, i)=>(
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

Plan.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(`https://heartbeat.bible/de/${slug}.json`);
  const data = await res.json();
  const {title, plan, color, credits} = data;
  return {
    title, color, plan, slug
  };
};

export default Plan;