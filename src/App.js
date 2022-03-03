import { Home } from "./components/pages/home/index";
import { Contact} from "./components/pages/contact/contact.jsx";
import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
