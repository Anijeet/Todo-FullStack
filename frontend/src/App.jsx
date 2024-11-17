import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/footer'
import About from './components/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Todo from './components/Todo'
import { useDispatch } from 'react-redux'
import { authActions } from './store'

const App = () => {
  const dispatch=useDispatch()
  useEffect(() => {
  const id=sessionStorage.getItem('id');
  if(id){
    dispatch(authActions.login())
  }
  }, [])
  
  return (
    <>
    <div className='h-screen'>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/signout' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/logout' element={<Home/>}/>
        </Routes>
      </Router>
      <Footer/>
      </div>
    </>
  )
}

export default App