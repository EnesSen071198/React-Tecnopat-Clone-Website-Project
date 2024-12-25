import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YapayZeka from "./pages/YapayZeka";
import Haber from "./pages/Haber";
import Makale from "./pages/Makale";
import Video from "./pages/Video";
import Tavsiyeler from "./pages/Tavsiyeler";
import Sosyal from "./pages/Sosyal";
import Etkinlik from "./pages/Etkinlik";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/YapayZeka' element={<YapayZeka />} />
        <Route path='/Haber' element={<Haber />} />
        <Route path='/Makale' element={<Makale />} />
        <Route path='/Video' element={<Video />} />
        <Route path='/Tavsiyeler' element={<Tavsiyeler />} />
        <Route path='/Sosyal' element={<Sosyal />} />
        <Route path='/Etkinlik' element={<Etkinlik />} />
      </Routes>
    </div>
  );
};

export default App;
