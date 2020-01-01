import PlanLink from '../src/components/PlanLink'
import Header from '../src/components/Header'
import Recommendations from '../src/components/Recommendations'
import fetch from 'isomorphic-unfetch';
import { useEffect } from 'react';
import PWAInstallPrompt from "../src/components/PWAInstallPrompt"

export default function Index(props) {

  return (
    <div className="max-w-xl mx-auto"> 
      <Header />
      <h3 className="mx-5 text-gray-900 text-lg mt-1 font-sans font-semibold border-gray-400 inline-block dark:text-gray-200 dark:border-gray-700">Lesepläne</h3>
      <div>
        {props.plans.map((entry, i) => 
          <PlanLink key={i} {...entry} />
        )}
      </div>
      <PWAInstallPrompt />
      <Recommendations />
    </div>  
    )
}

Index.getInitialProps = async function() {
  const baseURL = 'heartbeat.bible'
  const res = await fetch(`https://${baseURL}/de/index.json`);
  const {plans} = await res.json();
  return {
    plans
  };
};
