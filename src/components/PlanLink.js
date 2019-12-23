import Link from 'next/link'
import { darken,lighten } from '../utils'

const PlanLink = (props) => {
  const {title, slug, color} = props;
  return (
    <>
      <Link href={`/plan/${slug}`}>
        <div className="planlink flex items-center font-medium w-100 m-4 p-4 sm:pl-5 font-mono text-lg rounded-lg hover:cursor-pointer select-none">
          <span>{title}</span>
        </div>
      </Link>
      <style jsx>{`
        .planlink {
          background-color: ${color};
          border: 2px solid ${darken(color,152)};
          box-shadow: 4px 4px 0 ${darken(color,152)};
          color: ${darken(color,152)};
          min-height: 48px;
          transform: translate(-2px, -2px);
        }
        .planlink:hover {
          filter: saturate(1.25);
          opacity: 0.9;
        }
        .planlink:active {
          transform: translate(0);
          box-shadow: 2px 2px 0 ${darken(color,152)}
        }
      `}</style>
    </>
  )
}
export default PlanLink;