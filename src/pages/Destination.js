import { memo } from 'react'

import { PageBg, Tabs } from '../components'

export const Destination = memo(() => {
  return (
    <div className='destination'>
      <PageBg
        desktop='./assets/destination/background-destination-desktop.jpg'
        tablet='./assets/destination/background-destination-tablet.jpg'
        mobile='./assets/destination/background-destination-mobile.jpg'
      />
      <div className='container'>
        <h1 className='page__title'>
          <span>01</span>
          Pick your destination
        </h1>
        <Tabs />
      </div>
    </div>
  )
})
