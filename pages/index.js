import PlanLink from '../src/components/PlanLink'
import Header from '../src/components/Header'
import Recommendations from '../src/components/Recommendations'
import PWAInstallPrompt from "../src/components/PWAInstallPrompt"
import CookieNotice from '../src/components/CookieNotice'

function Index({plans, cookie}) {

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
      <CookieNotice text={cookie} />
      <Recommendations />
      </div>
    </>  
    )
}

export const getStaticProps = async (context) => {
  const {plans, cookie} = require(`../public/${context.locale}/index.json`)
  return {
    props: { plans, locale: context.locale, cookie }
  };
};

export default Index