import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import themeContext from '../context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const HandleTheme = () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark');
}
const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(themeContext);

  return (
    <>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <li>
        <Link className='linkStyle' to="/">Home</Link>
      </li>
      <li>
        <Link className='linkStyle' to="/contact">Contact</Link>
      </li>
      <li>
        <Link className='linkStyle' to="/favs">Favs</Link>
      </li>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
    <Outlet />
    </>
)
}

export default Navbar;