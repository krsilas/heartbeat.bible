import CheckItem from '../../src/components/CheckItem'
import VideoItem from '../../src/components/VideoItem'
import SectionHeader from '../../src/components/SectionHeader'
import localforage from 'localforage'
import { useState, useLayoutEffect, useEffect } from 'react'

export default function CheckList({ plan, color, slug }) {
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

  useLayoutEffect(()=>{
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
		<div className="max-w-xl mx-auto">
			<ul className="p-4 md:px-6 md:py-3 rounded-sm">
			{plan.slice(0,100).map((item, i)=>(
				item.day 
				? <CheckItem key={i} color={color} checked={isChecked(item.day)} handleClick={()=>handleClick(item.day)}>
						{item.chapters.map((entry, i)=><p key={i}>{entry}</p>)}
					</CheckItem>
				: <Item item={item} key={i} />
				))}
			</ul>
		</div>
	)
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