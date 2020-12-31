import Link from 'next/link'
import colors from '../colors'

const PlanLink = ({title, slug, color, days}) => {
  return (
    <>
      <Link href="/plan/[slug]" as={`/plan/${slug}`}>
        <div className={`${colors[color]} bg-opacity-30 dark:bg-opacity-20 w-full p-4 rounded-xl hover:cursor-pointer hover:bg-opacity-40 transition duration-100`}>
          <div className="flex flex-col">
            <span className="text-sm opacity-70 leading-none mb-1">{days}</span>
            <span className="text-2xl text-opacity-95">{title}</span>
          </div>
        </div>
      </Link>
    </>
  )
}
export default PlanLink;