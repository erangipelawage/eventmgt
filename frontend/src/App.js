import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Facilities from "./pages/Facilities";
import Outdoor from "./pages/Outdoor";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ratings from "./pages/Ratings";
import Eventpackages from "./pages/Eventpackages";
import BookNow from "./pages/BookNow";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Facilities" element={<Facilities />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Outdoor" element={<Outdoor />}/>
        <Route path="/Ratings" element={<Ratings />}/>
        <Route path="/Eventpackages" element={<Eventpackages />}/>
        <Route path="/BookNow" element={<BookNow />}/>
        <Route path="/Rooms" element={<Rooms />}/>
      </Routes>
      <Footer />
      
    </div>
  );
}    

export default App;