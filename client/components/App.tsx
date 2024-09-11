import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </div>
  )
}
