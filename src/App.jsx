import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/NotFound/NotFound'

function App() {
  

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
