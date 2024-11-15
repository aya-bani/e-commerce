import Paths from './routes/Paths';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "src/pages/Welcome";
import AboutUs from "src/pages/AboutUs";
import Contact from "src/pages/Contact";
import Men from "src/pages/Men";



<Router >
    <Routes>
        <Route path={`/${Paths.welcome}`}><Welcome/></Route>
        <Route path={`/${Paths.aboutus}`}><AboutUs/></Route>
        <Route path={`/${Paths.contact}`}><Contact/></Route>
        <Route path={`/${Paths.mensection}`} element={<Men/>}/>
    </Routes>
</Router>
