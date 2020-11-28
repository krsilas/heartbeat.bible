import Link from 'next/link'
import { useEffect } from 'react'
import colors from '../colors'

const PlanLink = ({title, slug, color, days}) => {
  return (
    <>
      <Link href="/plan/[slug]" as={`/plan/${slug}`}>
        <div className={`${colors[color]} bg-opacity-30 dark:bg-opacity-20 w-full p-4 rounded-xl hover:cursor-pointer hover:bg-opacity-40 transition duration-200`}>
          <div className="">
            <span className="text-sm opacity-70 leading-none">{days}</span> <br />
            <span className="text-2xl text-opacity-95">{title}</span>
          </div>
        </div>
      </Link>
    </>
  )
}
export default PlanLink;