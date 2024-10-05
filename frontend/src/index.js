import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import State from "./pages/State";
import District from "./pages/District";
import Facebook from "./pages/Facebook";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import AddSociety from "./pages/AddSociety";
import Members from "./pages/Members";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="state" element={<State />} />
          <Route path="district" element={<District />} />
          <Route path="face" element={<Facebook />} />
          <Route path="login" element={<Login />} />
          <Route path="demo" element={<Demo />} />
          <Route path="AddSociety" element={<AddSociety />} />
          <Route path="Members" element={ <Members/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);