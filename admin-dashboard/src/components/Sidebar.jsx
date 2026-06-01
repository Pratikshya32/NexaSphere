import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav-list">
        <NavLink 
          to="/events" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          aria-current={({ isActive }) => isActive ? 'page' : undefined}
        >
          Events
        </NavLink>
        <NavLink 
          to="/users" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          aria-current={({ isActive }) => isActive ? 'page' : undefined}
        >
          Users
        </NavLink>
        <NavLink 
          to="/registrations" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          aria-current={({ isActive }) => isActive ? 'page' : undefined}
        >
          Registrations
        </NavLink>
      </nav>
    </aside>
  );
}
