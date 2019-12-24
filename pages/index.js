import PlanLink from '../src/components/PlanLink'
import Header from '../src/components/Header'
import fetch from 'isomorphic-unfetch';

export default function Index(props) {
  return (
    <div className="max-w-xl mx-auto"> 
      <Header />
      <h3 className="mx-4 text-lg mt-1 font-sans font-bold border-gray-400 inline-block dark:text-gray-200 dark:border-gray-700">Lesepläne</h3>
      {props.plans.map((entry, i) => 
        <PlanLink key={i} {...entry} />
      )}
      <h3 className="hidden mx-4 text-lg mt-6 font-mono font-bold border-b-4 border-gray-400 inline-block dark:text-gray-100 dark:border-gray-700">Bücher</h3>

      <h3 className="hidden mx-4 text-lg mt-6 font-mono font-bold border-b-0 border-gray-400 inline-block dark:text-gray-100 dark:border-gray-700">Podcast</h3>
    </div>  
    )
}

Index.getInitialProps = async function() {
  const baseURL = 'heartbeat.krausesilas.now.sh'
  const res = await fetch(`https://${baseURL}/de/index.json`);
  const {plans} = await res.json();
  return {
    plans
  };
};
