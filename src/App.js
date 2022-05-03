import { Home } from "./components/pages/home/index";
import { Contact} from "./components/pages/contact/contact.jsx";
import { About } from "./components/pages/about/about";
import { Barber } from "./components/pages/barber/barber";
import { ConsultBarber } from "./components/pages/ConsultBarber/ConsultBarber";
import { Loginregister } from "./components/pages/loginregister/loginregister.jsx";
import { Perfil } from "./components/pages/perfil/perfil";
import { Agendamientos } from "./components/layouts/agendamientos";
import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Barber" element={<Barber/>}/>
                <Route path="/ConsultBarber" element={<ConsultBarber/>}/>
                <Route path="/Loginregister" element={<Loginregister/>}/>
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="/Agendar" element={<Agendamientos/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
