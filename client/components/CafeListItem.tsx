import { Star } from 'lucide-react'
import { Cafe } from '../../models/cafes'
import { Link } from 'react-router-dom'
import { AspectRatio } from './ui/aspect-ratio'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <li className="col-span-full grid grid-cols-subgrid bg-secondary py-3 text-secondary-foreground">
      <Link
        to={`/cafes/${cafe.id}`}
        className="col-start-2 col-end-[-2] grid auto-rows-max grid-cols-subgrid items-center gap-x-dx"
      >
        <AspectRatio
          ratio={1 / 1}
          className="overflow-hidden rounded-full bg-primary/30"
        >
          <img
            src={`/images/${cafe.image}.jpeg`}
            alt={`${cafe.name}`}
            className="min-h-full min-w-full object-cover mix-blend-multiply"
          ></img>
        </AspectRatio>
        <div className="col-start-[2] col-end-[-2] flex flex-col justify-center">
          <h2 className="text-balance font-semibold">{cafe.name}</h2>
          <p className="text-sm text-muted-foreground">
            {cafe.distance ? `${cafe.distance} - ${cafe.suburb}` : cafe.suburb}
          </p>
        </div>
        <div className="col-start-[-1] flex items-center justify-end gap-1">
          <p className="text-xl font-black">{cafe.avgRating}</p>
          <Star className="size-4" />
        </div>
      </Link>
    </li>
  )
}
