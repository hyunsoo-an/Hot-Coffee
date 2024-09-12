import { Cafe } from '../../models/cafes'
import { Link } from 'react-router-dom'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <div className="mb-4 rounded-lg shadow-md">
      <Link
        to={`/cafes/${cafe.id}`}
        className="grid auto-rows-max grid-cols-[1fr_auto]"
      >
        <h2 className="ml-3 mt-3 font-semibold">{cafe.name}</h2>
        <p className="mb-3 ml-3 mt-2 text-sm text-muted-foreground">
          {cafe.suburb}
        </p>
        <p className="col-start-2 row-span-2 row-start-1 mr-3 flex items-center text-lg font-black">
          {cafe.avgRating}
        </p>
      </Link>
    </div>
  )
}
