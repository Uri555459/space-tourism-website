import { memo } from 'react'
import { Link } from 'react-router-dom'

export const Logo = memo(() => {
  return (
    <Link className='logo' to='/'>
      <img src='./assets/shared/logo.svg' alt='logo' />
    </Link>
  )
})
