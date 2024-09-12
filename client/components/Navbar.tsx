import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <Button variant="link">Rate coffees</Button>
      </NavLink>
      <NavLink to="/cafes">
        <Button variant="link">Find cafes</Button>
      </NavLink>
    </div>
  )
}
