import PlanLink from '../src/components/PlanLink'
import Header from '../src/components/Header'
import Recommendations from '../src/components/Recommendations'
import PWAInstallPrompt from "../src/components/PWAInstallPrompt"

export default function Index(props) {

  return (
    <> 
      <Header />
      <div className="max-w-xl mx-auto">
      <h3 className="mt-8 mx-5 -mb-2 text-gray-900 text-lg mt-1 font-sans font-semibold border-gray-400 inline-block dark:text-gray-200 dark:border-gray-700">Lesepläne</h3>
      <div>
        {props.plans.map((entry, i) => 
          <PlanLink key={i} {...entry} />
        )}
      </div>
      <PWAInstallPrompt />
      <Recommendations />
      </div>
    </>  
    )
}
export const getStaticProps = async () => {
  const baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'https://heartbeat.bible';
  const res = await fetch(`${baseURL}/de/index.json`);
  const { plans } = await res.json();
  return {
    props: { plans }
  };
};
