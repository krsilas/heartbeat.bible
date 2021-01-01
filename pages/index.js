import PlanLink from '../src/components/PlanLink'
import Header from '../src/components/Header'
import Recommendations from '../src/components/Recommendations'
import PWAInstallPrompt from "../src/components/PWAInstallPrompt"
import CookieNotice from '../src/components/CookieNotice'

function Index({plans}) {

  return (
    <> 
      <Header />
      <div className="max-w-xl mx-auto">
      <div className="font-thicker p-4 pb-0 space-y-4">
        {plans.map((entry, i) => 
          <PlanLink key={i} {...entry} />
        )}
      </div>
      <PWAInstallPrompt />
      <CookieNotice />
      <Recommendations />
      </div>
    </>  
    )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/de/index.json`);
  const {plans} = await res.json();
  return {
    props: { plans }
  };
};

export default Index