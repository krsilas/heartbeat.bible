import Link from 'next/link'
import { colors } from '../utils'

const PlanLink = (props) => {
  const {title, slug, color} = props;
  
  return (
    <>
      <Link href={`/plan?slug=${slug}`} as={`/plan/${slug}`}>
        <div id={`morph-${slug}`} data-morph-ms="300" className={`planlink flex items-center border font-medium w-100 m-4 p-4 sm:pl-5 font-mono text-lg rounded-lg hover:cursor-pointer select-none ${colors[color]}`}>
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