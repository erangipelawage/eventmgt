import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Facilities from "./pages/Facilities";
import Outdoor from "./pages/Outdoor";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Facilities" element={<Facilities />}/>
        <Route path="/Outdoor" element={<Outdoor />}/>
      </Routes>
      
    </div>
  );
}

export default App;