
import './App.css'
import Action from './full_stack/Action'
import Comedy from './full_stack/Comedy'
import Home from './full_stack/Home'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'

function App() {
 

  return (
    <div>

    
    <Router>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Comedy'>Comedy</NavLink>
          <NavLink to='/Action'>Action</NavLink>
         

        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Comedy' element={<Comedy/>}></Route>
          <Route path='/Action' element={<Action/>}></Route>
          
        </Routes>
      </Router>
       </div> 
    
  )
}

export default App
