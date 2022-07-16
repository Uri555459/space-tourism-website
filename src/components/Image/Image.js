import React from 'react'

export const Image = ({ webp = '', png = '', alt = '' }) => {
  return (
    <picture>
      <source srcSet={webp} type='image/webp' />
      <img src={png} alt={alt} />
    </picture>
  )
}
