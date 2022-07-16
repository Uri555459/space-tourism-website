import { memo } from 'react'

import { Navbar } from '../components'

export const LayoutDefault = memo(({ children }) => {
  return (
    <div className='wrapper'>
      <Navbar />
      {children}
    </div>
  )
})
