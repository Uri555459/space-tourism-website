import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LayoutDefault } from './Layouts/LayoutDefault'

import { NotFound } from './pages'

import { routes } from './routes/'

function App() {
  useMemo(() => routes, [])
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes>
          {routes &&
            routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  )
}

export default App
