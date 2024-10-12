import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import AddSociety from "./components/AddSociety";
import AddHouse from "./components/AddHouse"
import HouseReport from "./components/HouseReport"

import Members from "./components/Members";
import Adminworks from "./pages/Adminworks";


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