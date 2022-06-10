import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import AddPhone from "./pages/AddPhone";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/addphone" element={<AddPhone />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
