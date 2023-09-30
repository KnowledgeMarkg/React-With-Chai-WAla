import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoData } from './components/Github/Github'
import User from './components/User/User'
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
        <Route path='' element ={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='contact' element = {<Contact/>} />
        <Route path='github' loader={githubInfoData} element ={<Github/>} />
        <Route path='user/:userId' element ={<User/>} />
      </Route>
    )
  ) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
