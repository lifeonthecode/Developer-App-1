import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Route, Routes} from "react-router"
import App from './App';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>   
    {/* header section  */}
    <Header></Header>

    {/* Page Routes  */}
    <Routes>
      {/* single page route 'Home page Route'  */}
      <Route index element={<App/>}/>

      {/* single page route 'About Page Route'  */}
      <Route path='about' element={<About/>}/>

      {/* single page route 'Contact Page Route'  */}
      <Route path='contact' element={<Contact/>}/>
    </Routes>   

    {/* footer section    */}
    <Footer/>
    
  </BrowserRouter>
)
