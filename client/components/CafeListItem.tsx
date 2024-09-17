import { Star } from 'lucide-react'
import { Cafe } from '../../models/cafes'
import { Link } from 'react-router-dom'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <div className="rounded-lg bg-secondary p-4 text-secondary-foreground">
      <Link
        to={`/cafes/${cafe.id}`}
        className="grid auto-rows-max grid-cols-[1fr_auto] gap-x-dx"
      >
        <h2 className="font-semibold">{cafe.name}</h2>
        <p className="text-sm text-muted-foreground">
          {cafe.distance ? `${cafe.distance} - ${cafe.suburb}` : cafe.suburb}
        </p>
        <div className="col-start-2 row-span-2 row-start-1 flex items-center gap-2">
          <p className="text-xl font-black">{cafe.avgRating}</p>{' '}
          <Star className="size-4" />
        </div>
      </Link>
    </div>
  )
}
