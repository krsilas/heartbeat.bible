import { useEffect, useState } from 'react'
import localforage from 'localforage'
import { isPWA } from '../utils'
import { useRouter } from 'next/router'
const Recommendations = () => {
		const router = useRouter()
    const [ recEnabled, setRec ] = useState(false)
    const [ scrollPosition, setScrollPosition ] = useState(0)
    const scrollListener = () => {
        document.addEventListener("scroll", () => {
          setScrollPosition(window.scrollY);
        })
    }
    useEffect(()=>{
        localforage.getItem('recEnabled').then(value=>{
				if (value === null) {
					setRec(router.locale === 'de' ? true : false)
					localforage.setItem('recEnabled', router.locale === 'de' ? true : false)
				} else {
					setRec(value)
				}
        }).catch(()=>{setRec(true)})
		
        return scrollListener()
      }, [])
    if (!recEnabled) return null
    return (
        <div className={`recommendations text-sm my-12 mx-5 transition-slower transition-opacity text-gray-900 ${scrollPosition < 30 ? 'opacity-33' : null}`}>
        <h3 className="text-lg mt-1 font-sans font-semibold border-gray-400 inline-block dark:text-gray-200 dark:border-gray-700">Empfehlungen</h3>

        <h4 className="mt-1 uppercase text-gray-700 dark:text-gray-400 font-semibold tracking-wider">Bücher</h4>
        <p className="font-light text-gray-600 inline-block mb-1 dark:text-gray-400">Falls du noch keine Bibel hast oder nur eine, die schwer verständlich ist, empfehle ich dir:</p>
        <Item title="Neues Leben. Die Bibel -&nbsp;Sonderausgabe" subtitle="SCM R.Brockhaus" img="neues-leben.png" href="https://www.amazon.de/Neues-Leben-Die-Bibel-Sonderausgabe/dp/3417253799/" type="book" />
        
        <p className="mt-4 font-light text-gray-600 dark:text-gray-400 inline-block">Wenn du die Bibel besser verstehen willst, können dir diese Bücher weiterhelfen:</p>
        <Item title="Effektives Bibelstudium: Die Bibel verstehen und auslegen" subtitle="Douglas Stuart und Gordon D. Fee" img="effektiv-bibel.png" href="https://www.amazon.de/Effektives-Bibelstudium-Bibel-verstehen-auslegen/dp/3765506028/" type="book" />
        <Item title="Sein Wort - meine Welt: Die Studienbibel für das 21. Jahrhundert" img="elb-studienbibel.png" href="https://www.amazon.de/Sein-Wort-meine-Studienbibel-Jahrhundert/dp/3417255430/" type="book" />

				<h4 className="mt-8 mb-2 uppercase text-gray-700 dark:text-gray-400 font-semibold tracking-wider">Podcasts</h4>
        <Item type="podcast" title="Knowing Faith" subtitle="The Village Church Dallas" img="knowing_faith.jpg" href="https://plinkhq.com/i/1274228164?to=page"/>
				<Item type="podcast" title="Solid Joys Daily Devotional" subtitle="Desiring God" img="solid_joys.jpg" href="https://plinkhq.com/i/1315817340?to=page"/>
				{/* <Item type="podcast" title="Podcast #3" subtitle="" img="" /> */}

				<h4 className="mt-8 mb-2 uppercase text-gray-700 dark:text-gray-400 font-semibold tracking-wider">Apps</h4>
        <Item type="app" title="Bibel (YouVersion)" subtitle="Life.Church" img="youversion.png" href="http://onelink.to/ynpga7" />
				<Item type="app" title="Blueletter Bible" subtitle="In-Depth Study Bible" img="blue_letter_bible.png" href="http://onelink.to/w8ecs3" />

				<h4 className="mt-8 mb-2 uppercase text-gray-700 dark:text-gray-400 font-semibold tracking-wider">Youtube</h4>
        <Item type="youtube" title="Das Bibel Projekt" subtitle="" img="bibel_projekt.jpg" href="https://www.youtube.com/channel/UCMvmlvKoZV0vcM2kjLwOAbQ" />
				<Item type="youtube" title="Look at the Book" subtitle="Desiring God" img="look_at_the_book.jpg" href="https://www.youtube.com/playlist?list=PLAcB0f-21Xj0MTWuh7NKKploqNgpbJsY2"/>
				<Item type="youtube" title="Permission Granted" subtitle="Fire & Fragrance" img="fireNfragrance.jpg" href="https://www.youtube.com/playlist?list=PLP84kxGvMHnv08Tf-JkvvJMRh_tGaXt8l" />
		<style scoped jsx>{`
		@keyframes fadeIn {
			0% { 
				opacity: .1; 
				${(document.cookie.indexOf('pwaprompt=false') != -1 || isPWA()) ? '':'transform: translateY(100px)'} 
			}
			33% { opacity: .2 }
			100% { opacity: .33 }
		}
		.recommendations {
			animation: fadeIn 400ms ease;
		}
		`}</style>				
        </div>
    )
}

const Item = (props) => {
		const { title, subtitle, img, href, type } = props;
		const baseURL = 'heartbeat.bible'
		function imageUrl(url, w = 64, q = 90) {
			//if (process.env.NODE_ENV === 'production') {
				return `https://cdn.statically.io/img/${baseURL}/images/${url}?w=${w}&h=${w}&quality=${q}`
			//} else {
			//	return `/images/${url}`
			//}
		}
    return (
		<a 	href={href} target="_blank" rel="noopener norefferer" 
			className="flex text-gray-800 items-center px-2 py-2 bg-gray-300 bg-opacity-30 dark:bg-opacity-10 rounded-big my-2 tap-none hover:bg-opacity-40 active:bg-opacity-50">
				<img srcSet={`${imageUrl(img, 128)} 2x, ${imageUrl(img)} 1x`} sizes="64px" className="h-16 w-auto m-1 mr-3 rounded" src={imageUrl(img)} type={type} width="100" height="100" alt="Image" />
				<div className="py-1 flex-grow dark:text-gray-400">
                <h4 className="font-medium text-base text-gray-800 dark:text-gray-300 leading-tight pb-1">{title}</h4>
                <p className="font-light opacity-75 dark:opacity-100 text-sm">{subtitle}</p>
            </div>
            <svg className="m-2 text-gray-600 dark:text-gray-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 0 26 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<g className={ type === 'book' ? 'block' : 'hidden' }><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></g>
							<g className={ type === 'podcast' ? 'block' : 'hidden' }><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
							</g>
							<g className={ type === 'youtube' ? 'block' : 'hidden' }><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/>
							</g>
							<g className={ type === 'app' ? 'block' : 'hidden' }><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>
							</g>
						</svg>
				<style jsx>{`
				img[type="book"] {
						filter: drop-shadow(1px 2px 0.125rem #C4C8CC);
						margin-right: 0.5rem !important;
				}
				@media (prefers-color-scheme: dark){
						img[type="book"] {
								filter: drop-shadow(1px 2px 0.125rem #111) 
						}
				}
				`}</style>
        </a>
    )
}
export default Recommendations