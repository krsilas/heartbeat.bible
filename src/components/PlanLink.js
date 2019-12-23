import Link from 'next/link'
//import { darken,lighten } from '../utils'

const PlanLink = (props) => {
  const {title, slug, color} = props;
  const colors = {
    blue: `bg-blue-200 border-blue-300 text-blue-900`,
    red: `bg-red-200 border-red-300 text-red-900`,
    green: `bg-green-200 border-green-300 text-green-900`,
    yellow: `bg-yellow-200 border-yellow-300 text-yellow-900`,
    orange: `bg-orange-200 border-orange-300 text-orange-900`,
    indigo: `bg-indigo-200 border-indigo-300 text-indigo-900`,
    teal: `bg-teal-200 border-teal-300 text-teal-900`,
  }
  return (
    <>
      <Link href={`/plan/${slug}`}>
        <div className={`planlink flex items-center border font-medium w-100 m-4 p-4 sm:pl-5 font-mono text-lg rounded-lg hover:cursor-pointer select-none ${colors[color]}`}>
          <span>{title}</span>
        </div>
      </Link>
      <style jsx>{`
        .planlink {
          min-height: 48px;
        }
        .planlink:hover {
          filter: saturate(1.25);
          opacity: 0.9;
        }
        .planlink:active {
        }
      `}</style>
    </>
  )
}
export default PlanLink;