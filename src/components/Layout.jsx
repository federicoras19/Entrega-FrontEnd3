import { useContext } from "react";
import themeContext from "../context";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import Favs from "../routes/Favs";
import Detail from "../routes/Detail";
import NoPage from "../routes/NoPage";
import NavBar from "./Navbar";
import Footer from "./Footer";


const Layout = ({children}) => {
    const { theme } = useContext(themeContext);

    return (
        <div style={{background: theme.background, color: theme.color}}>
            {children}
        </div>
    )
}

export default Layout;