import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayOut from './mainLayout'
import Home from './screens/Home/Home'
import NotFound from './screens/NotFound/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayOut/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
