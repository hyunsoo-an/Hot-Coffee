import CafeListItem from './CafeListItem'
import { Cafe } from '../../models/cafes'

export default function CafeList({ cafes }: { cafes: Cafe[] }) {
  return (
    <div className="grid gap-dy">
      {cafes.map((cafe, index) => {
        return <CafeListItem key={index} cafe={cafe} />
      })}
    </div>
  )
}
