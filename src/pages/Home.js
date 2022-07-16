import { memo } from 'react'

import { PageBg } from '../components'

export const Home = memo(() => {
  return (
    <div className='home'>
      <PageBg
        desktop='./assets/home/background-home-desktop.jpg'
        tablet='./assets/home/background-home-tablet.jpg'
        mobile='./assets/home/background-home-mobile.jpg'
      />

      <div className='container'>
        <div className='home__inner'>
          <div className='home__content'>
            <p className='home__subtitle'>SO, YOU WANT TO TRAVEL TO</p>
            <h1 className='home__title'>SPACE</h1>
            <p className='home__desc'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <button className='home__button'>EXPLORE</button>
        </div>
      </div>
    </div>
  )
})
