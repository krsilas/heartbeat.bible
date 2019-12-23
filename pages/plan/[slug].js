import CheckItem from '../../src/components/CheckItem'
import VideoItem from '../../src/components/VideoItem'
import SectionHeader from '../../src/components/SectionHeader'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import localforage from 'localforage'
import { darken, lighten } from '../../src/utils'
import { useState, useEffect } from 'react'

const Plan = (props) => {
  const { title, plan, color, slug } = props;
  const [ days, setDays ] = useState([]);

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
      setDays(value)
      console.log('restored', value)
    }).catch((err)=>{
      console.error(err)
    })
  }, [])

  return (
    <>
    <div className="app-bar w-full px-4 py-2 bg-blur border-b-5 border-color font-bold text-2xl text-color font-fira fixed">
        <Link href="/"><a>{`<-`}</a></Link>
    </div>
    <div className="h-12 mb-3 w-full"></div>
    <div className="dark:text-gray-300 p-2 pb-0">
      <header className="flex rounded-px items-center h-48 pb-4 w-full max-w-xl mx-auto">
        <h1 className="p-4 mt-6  font-mono text-4xl font-bold leading-tight tracking-tight text-color select-none">{title}</h1>
      </header>

      {/* List */}
      <div className="max-w-xl mx-auto">
        <ul className="p-4 md:px-6 md:py-3 rounded-sm">

          {plan.map((item, i)=>(
            item.day &&
            <CheckItem key={item.day} checked={isChecked(item.day)} handleClick={()=>handleClick(item.day)}>
              {item.chapters.map((entry, i)=><p key={i}>{entry}</p>)}
            </CheckItem>
          ))}

        </ul>
      </div>
      {/* End List */}

    </div>
    <style jsx>{`
      --color: ${darken(color,33)}
      .text-color {
        color: var(--color);
      }
      .border-color {
        border-color: var(--color);
      }
      .font-fira { 
        font-family: "Fira Code" 
      }
      header {
        border: 5px solid var(--color);
      }
      .bg-blur {
        backdrop-filter: blur(8px) saturate(70%);
        background-color: ${lighten(color,150,0.6)};
      }
      @media(prefers-color-scheme: dark) {
        .bg-blur {
          backdrop-filter: blur(8px) saturate(70%) contrast(80%);
          background-color: ${darken(color,190,0.4)};
        }
      }
    `}</style>
    </>
  );
}

Plan.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(`https://heartbeat.krausesilas.now.sh/de/${slug}.json`);
  const data = await res.json();
  const {title, plan, color, credits} = data;
  return {
    title, color, plan, credits, slug
  };
};

export default Plan;