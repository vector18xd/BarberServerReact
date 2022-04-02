import { Home } from "./components/pages/home/index"
import { Contact} from "./components/pages/contact/contact.jsx"
import { About } from "./components/pages/about/about"
import { Barber } from "./components/pages/barber/barber"
import { Loginregister } from "./components/pages/loginregister/loginregister.jsx"
import './App.css'
import {Routes, BrowserRouter, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Barber" element={<Barber/>}/>
                <Route path="/Loginregister" element={<Loginregister/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
