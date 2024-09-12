import { Cafe } from '../../models/cafes'

export default function CafeListItem({ cafe }: { cafe: Cafe }) {
  return (
    <div className="cafe-list-item">
      <h3>{cafe.name}</h3>
      <p>{cafe.suburb}</p>
    </div>
  )
}
