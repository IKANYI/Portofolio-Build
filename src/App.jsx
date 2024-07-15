import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Head from './components/Head.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work/Work.jsx'
import Blogs from './pages/Blogs/Blog.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Head/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/works" element={<Work/>}/>
           <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
      
    </>
  )
}

export default App
