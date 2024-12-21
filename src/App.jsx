import Paths from './routes/paths';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import Faq from './pages/Faq';
import Dashboard from './pages/admin/Dashboard';
import Favorite from './pages/Favorite';
import ShoppingCartCard from './components/ShoppingCartCard';
import ProductDetails from './pages/ProductDetails';
const App = () => {
  return (
    <div>
      <Router >
          <Routes>
              <Route path={`/${Paths.welcome}`} element = {<Welcome/>}/>
              <Route path={`/${Paths.aboutus}`} element = {<AboutUs/>}/>
              <Route path={`/${Paths.contact}`} element = {<Contact/>}/>
              <Route path={`/${Paths.mensection}`} element={<Men/>}/>
              <Route path={`/${Paths.womensection}`} element={<Women/>}/>
              <Route path={`/${Paths.kidsection}`} element={<Kids/>}/>
              <Route path={`/${Paths.signin}`} element={<SignIn/>}/>
              <Route path={`/${Paths.signup}`} element={<SignUp/>}/>
              <Route path={`/${Paths.shoppingcart}`} element={<ShoppingCart/>}/>
              <Route path={`/${Paths.faq}`} element={<Faq/>}/>
              <Route path={`/${Paths.dashboard}`} element={<Dashboard/>}/>
              <Route path={`/${Paths.favorite}`} element={<Favorite/>}/>
              <Route path={`/${Paths.card}`} element={<ShoppingCartCard/>}/>
              <Route path={`/${Paths.productdetails}/:productId`} element={<ProductDetails />} />

          </Routes>
      </Router>

    </div>
  )
}

export default App

