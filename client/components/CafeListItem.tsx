import { Cafe } from '../../models/cafes'
import { Link } from 'react-router-dom'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <div className="mb-4 rounded-lg shadow-md">
      <Link to={`/cafes/${cafe.id}`} className="m-3 flex flex-col flex-wrap">
        <h3 className="text-xl font-bold text-gray-800">{cafe.name}</h3>
        <p className="text-gray-600">{cafe.suburb}</p>
        <p className="text-2xl font-semibold text-gray-700">{cafe.avgRating}</p>
      </Link>
    </div>
  )
}
