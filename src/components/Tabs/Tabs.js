import { memo, useCallback, useMemo, useState } from 'react'

import { Tab } from '../'
import { Image } from '../'

import data from '../../data.json'
const { destinations } = data

export const Tabs = memo(() => {
  const [tabActive, setTabActive] = useState(0)
  useMemo(() => destinations, [])

  const { png, webp } = destinations[tabActive].images

  const tabsHandler = useCallback((index) => {
    setTabActive(index)
  }, [])

  return (
    <div className='tabs'>
      <div className='tabs__inner'>
        <div className='tabs__image'>
          <Image webp={webp} png={png} name={destinations[tabActive].name} />
        </div>
        <div className='tabs__content'>
          <ul className='tabs__nav'>
            {destinations &&
              destinations.map(({ name }, index) => (
                <li
                  className={tabActive === index ? 'active' : null}
                  key={name}
                  onClick={() => tabsHandler(index)}
                >
                  {name}
                </li>
              ))}
          </ul>
          {<Tab {...destinations[tabActive]} />}
        </div>
      </div>
    </div>
  )
})
