import { useState } from 'react'

import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Index from './pages'
import CreatePost from './pages/CreatePost'
import ViewPost from './pages/ViewPost'
import CrudPost from './tienda/CrudPost'

function App() {

  return (
    <div className="App">
     <CrudPost>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index/>}></Route>
            <Route path='createPost' element={<CreatePost/>}></Route>
            <Route path='viewPost/:postId' element={<ViewPost/>}></Route>
          </Routes>
        </BrowserRouter>
     </CrudPost>
      
    </div>
  )
}

export default App
