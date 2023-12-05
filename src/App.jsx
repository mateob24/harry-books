import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/NotFound/NotFound'
import { CartContent } from './components/Cart/Cart'
import DataProvider from './components/Context/DataContext'

function App() {
  

  return (
    <>
      <DataProvider>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<CartContent />} />
          </Routes>
        </div>
      </DataProvider>
    </>
  )
}

export default App
