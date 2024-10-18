import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
<<<<<<< HEAD
import Country from "./pages/Country";a
import State from "./pages/State";
import District from "./pages/District";
import Facebook from "./pages/Facebook";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import AddSociety from "./pages/AddSociety";
import Members from "./pages/Members";
=======
import Contact from "./pages/Contact";

import AddSociety from "./components/AddSociety";


import AddHouse from "./components/AddHouse"
import HouseReport from "./components/HouseReport"

import Members from "./components/Members";
import Adminworks from "./pages/Adminworks";

>>>>>>> 10cc25eac9529c00bbd7151596edb2fad9ee9cb6

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="AddSociety" element={<AddSociety />} />

          <Route path="AddHouse" element={<AddHouse/>} />
          <Route path="HouseReport" element={<HouseReport/>} />

          <Route path="Members" element={<Members />} />
          <Route path="adminworks" element={<Adminworks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);