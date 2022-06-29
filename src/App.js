import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
//import AppLayout from "./components/layout/AppLayout";

import Register from "./components/views/Register";
import Login from "./components/views/Login";
import Forgot from "./components/views/Forgot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
