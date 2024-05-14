import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AllBlogs from './Components/BlogListingPage.jsx'
import SingleBlog from './Components/BlogPostPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='AssignmentWork' element={<App />}>
      <Route path='' element={<AllBlogs />} />
      <Route path='blog/Website security and why it is important' element={<SingleBlog path={"website-security-and-why-it-is-important"} />} />
      <Route path='blog/Best Affordable Web Hosting 2024' element={<SingleBlog path = {"best-affordable-web-hosting-2024"}/>} />
      <Route path='blog/Free Privacy Protection of Domain Names' element={<SingleBlog path={"free-privacy-protection-of-domain-names"}/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)