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
import RoomBookNow from "./pages/RoomBookNow";
import Rooms from "./pages/Rooms";
import GoldPackage from "./pages/GoldPackage";
import DinnerOutC from "./pages/DinnerOutC";
import DinnerOutF from "./pages/DinnerOutF";
import SilverPackags from "./pages/SilverPackags";
import JumboPackage from "./pages/JumboPackage";
import PlatinumPackage from "./pages/PlatinumPackage";
import Pay from "./Pay";
import LoginPage from './LoginPage';
import Validation from './Validation';  

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
        <Route path="/RoomBookNow" element={<RoomBookNow />}/>
        <Route path="/Rooms" element={<Rooms />}/>
        <Route path="/GoldPackage" element={<GoldPackage />}/>
        <Route path="/DinnerOutF" element={<DinnerOutF />}/>
        <Route path="/DinnerOutC" element={<DinnerOutC />}/>
        <Route path="/SilverPackags" element={<SilverPackags />}/>
        <Route path="/JumboPackage" element={<JumboPackage />}/>
        <Route path="/PlatinumPackage" element={<PlatinumPackage />}/>
        <Route path="/Pay" element={<Pay />}/>   
        <Route path="/LoginPage" element={<LoginPage />}/>
        <Route path="/Validation" element={<Validation />}/>     
      </Routes>
      {/* <Footer /> */}
      
    </div>
  );
}    

export default App;