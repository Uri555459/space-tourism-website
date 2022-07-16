import React, { memo } from 'react'

export const PageBg = memo(({ desktop = '', tablet = '', mobile = '' }) => {
  return (
    <picture className='page__bg'>
      <source media='(min-width: 768px)' srcSet={desktop} />
      <source media='(min-width: 375px)' srcSet={tablet} />
      <img src={mobile} alt='Bg' />
    </picture>
  )
})
