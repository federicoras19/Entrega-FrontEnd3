import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Detail from "./routes/Detail";
import Favs from "./routes/Favs";
import Home from "./routes/Home";
import NavBar from "./components/Navbar";
import NoPage from "./routes/NoPage";
import Footer from "./components/Footer";
import './App.css';
import themeContext, {themes} from "./context";
import { useState } from "react";
import Layout from "./components/Layout";


function App() {
  const [theme, setTheme] = useState(themes.light);
  
  const handleChangeTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <div className="App">
      <themeContext.Provider value={{theme, handleChangeTheme}}> 
      <Layout>
      <BrowserRouter>
      <NavBar/>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
      </BrowserRouter>
      </Layout>
      </themeContext.Provider>
    </div>
  );
}

export default App;