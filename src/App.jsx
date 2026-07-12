import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <AppRoutes key={location.pathname} />
    </AnimatePresence>
  )
}

export default App
