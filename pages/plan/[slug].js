import colors from '../../src/colors'
import TopBar from '../../src/components/TopBar'
import PlanIntro from '../../src/components/PlanIntro'
import CheckList from '../../src/components/CheckList'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const Plan = (props) => {
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  function saveScrollY(){
    localStorage.setItem(props.slug+'-scroll', window.pageYOffset)
    console.log(window.pageYOffset)
  }
  //const motionYStart = useMemo(()=> (scrollY < 50) ? 30 : 0)
  useEffect(()=>{
    const offset = parseInt(localStorage?.getItem(props.slug+'-scroll'))
    setScrollY(offset)
    window.scrollTo(0, offset)
    router.events.on('routeChangeStart', saveScrollY)
    //window.addEventListener("beforeunload", saveScrollY)
    return () => {
      router.events.off('routeChangeStart', saveScrollY)
      //window.removeEventListener('beforeunload', saveScrollY)
    }
  }, [])

  return (
    <>
    <TopBar back={true} />
    <motion.div 
      initial={{opacity: 0, y: 30}} 
      animate={{opacity: 1, y: 0}} 
      exit={{opacity: 0, y: 30}} 
      transition={{ease: 'easeOut'}}
      className="md:pt-2"
      >
      <header
        className={`${colors[props.color]} bg-opacity-30 dark:bg-opacity-20 flex items-center w-full min-h-48 px-5 pr-6 pb-4 select-none max-w-xl md:mx-auto`}>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight darker">{props.title}</h1>
      </header>

      <main className={`px-1 text-gray-800 dark:text-gray-300`}>
      <PlanIntro introduction={props.introduction} />
      <CheckList {...props}/>
      </main>
    </motion.div>
    </>
  );
}

export async function getStaticPaths({locales}) {
  const paths = ["365", "30nt", "systematic", "start"]
  return {
    fallback: false,
    paths: paths.map((slug) => ({ params: { slug }, locale: 'fr' })).concat(paths.map((slug) => ({ params: { slug }, locale: 'de' })))
  }
}

export const getStaticProps = async ({ locale, params: { slug }}) => {
  const data = require(`../../content/${locale}/${slug}.json`)
  return {
    props:{ ...data, slug }
  };
};

export default Plan;