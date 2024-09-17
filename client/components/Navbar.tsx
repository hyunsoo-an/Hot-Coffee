import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className="grid grid-flow-col border-t bg-card/70 p-2 backdrop-blur-lg">
      <NavLink to="/" className="grid">
        {({ isActive }) => (
          <Button variant={isActive ? 'default' : 'ghost'}>Rate coffee</Button>
        )}
      </NavLink>
      <NavLink to="/cafes" className="grid">
        {({ isActive }) => (
          <Button variant={isActive ? 'default' : 'ghost'}>Find cafes</Button>
        )}
      </NavLink>
    </div>
  )
}
