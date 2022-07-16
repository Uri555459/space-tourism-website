import { memo } from 'react'

export const Tab = memo(({ name, description, distance, travel }) => {
  return (
    <div className='tab'>
      <h2 className='tabs__title'>{name}</h2>
      <p className='tabs__descr'>{description}</p>
      <div className='tabs__info'>
        <div className='tabs__distance'>
          <span>AVG. DISTANCE</span>
          <span>{distance}</span>
        </div>
        <div className='tabs__time'>
          <span>Est. travel time</span>
          <span>{travel}</span>
        </div>
      </div>
    </div>
  )
})
