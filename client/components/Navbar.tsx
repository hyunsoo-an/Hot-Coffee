import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <Button variant="link">Rate coffee</Button>
      </Link>
      <Link to="/cafes">
        <Button variant="link">Cafe list</Button>
      </Link>
    </div>
  )
}
