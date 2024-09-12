import { Cafe } from '../../models/cafes'
import { Link } from 'react-router-dom'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <div className="cafe-list-item">
      <Link to={`/cafes/${cafe.id}`}>
        <h3>{cafe.name}</h3>
        <p>{cafe.suburb}</p>
        <p>{cafe.avgRating}</p>
      </Link>
    </div>
  )
}
