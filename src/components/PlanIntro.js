import { useState } from 'react'

export default function PlanIntro({ introduction }) {
	const [ introOpen, setIntroOpen ] = useState(true)

	if (!introduction) return null
	return (
		<div className={`max-w-xl text-lg mx-auto mt-4 ${!introOpen ? '-mb-16 pb-10' : '-mb-8'} p-4 md:px-6 md:py-3`}>
				<div className="flex justify-between">
					<h4 className="font-bold uppercase text-2xl mb-4">{introduction.headline}</h4>
					<div onClick={()=>setIntroOpen(!introOpen)} className="hidden uppercase text-xs rounded-full leading-tight py-2 px-4 bg-gray-200 dark:bg-gray-800 dark:text-gray-200">{introOpen ? 'Ausblenden' : 'Anzeigen'}</div>
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
