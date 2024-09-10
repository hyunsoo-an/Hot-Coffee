import CafeListItem from './CafeListItem'

export default function CafeList() {
  const cafes = [
    { name: 'McCafe', suburb: 'Newtown' },
    { name: 'WildBean', suburb: 'Te Aro' },
  ]

  return (
    <div className="cafe-list">
      {cafes.map((cafe, index) => {
        return <CafeListItem key={index} cafe={cafe} />
      })}
    </div>
  )
}
