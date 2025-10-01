import { Link } from 'react-router-dom';        
import style from "./Nav.module.css";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
          <Link to='/people'>
            <h2>People</h2>
          </Link>

          <Link to='/starships'>
            <h2>Starships</h2>
          </Link>
          <Link to='/planets'>
            <h2>Planets</h2>
          </Link>
      </ul>
    </nav>
  )
}