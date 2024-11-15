import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";import Herosection from "C:/Users/Aya Bani/projets/e-commerce/src/components/Herosection"
import ProductsContainer from "C:/Users/Aya Bani/projets/e-commerce/src/components/ProductsContainer"
import ExploreProducts from "C:/Users/Aya Bani/projets/e-commerce/src/components/ExploreProducts"
import SocialMedia from "../components/SocialMedia"
const Welcome = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <ProductsContainer/>
      <ExploreProducts/>
      <SocialMedia/>
      <Footer/>
    </div>
  )
}

export default Welcome
