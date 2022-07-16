import { memo, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../'

import { routes } from '../../routes/'

export const Navbar = memo(() => {
  const [menuActive, serMenuActive] = useState(false)
  useMemo(() => routes, [])

  const menuHandler = () => {
    serMenuActive(!menuActive)
  }

  return (
    <div className='navbar'>
      <Logo />
      <div className='line'></div>
      <nav className={menuActive ? 'navigation active' : 'navigation'}>
        {routes &&
          routes.map(({ path, name }, index) => (
            <NavLink className='navigation__link' key={path} to={path}>
              <span>0{index + 1}</span>
              {name}
            </NavLink>
          ))}
        <img
          className='close'
          src='./assets/shared/icon-close.svg'
          alt='Close menu'
          onClick={menuHandler}
        />
      </nav>
      <img
        className='burger'
        src='./assets/shared/icon-hamburger.svg'
        alt='Mobile menu'
        onClick={menuHandler}
      />
    </div>
  )
})
