import { Cafe } from '../../models/cafes'
import { Link } from 'react-router-dom'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <div className="rounded-lg bg-secondary p-4 text-secondary-foreground">
      <Link
        to={`/cafes/${cafe.id}`}
        className="grid auto-rows-max grid-cols-[1fr_auto]"
      >
        <h2 className="font-semibold">{cafe.name}</h2>
        <p className="text-sm text-muted-foreground">{`${cafe.suburb} ${cafe.distance}`}</p>
        <p className="col-start-2 row-span-2 row-start-1 mr-3 flex items-center text-xl font-black">
          {cafe.avgRating}
        </p>
      </Link>
    </div>
  )
}
