import ProductCard from "../components/ProductCard";
import DiscoverMore from "../components/DiscoverMore";
import { productcards, discover } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";


const ProductSection = ({ title, products }) => (
    <div className="m-8">
      <h1 className="text-5xl font-bold m-8">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500">
        {products.map((card, key) => (
          <div key={key} className="flex align-center justify-center">
            <ProductCard
              image={card.image}
              name={card.name}
              price={card.price}
              etoile={card.etoile}
            />
          </div>
        ))}
      </div>
    </div>
  );


const Women = () => {
  return (
    <div>
    <Navbar />
    <section className="w-full flex align-center justify-center flex-col">
      <ProductSection title="Women's Latest" products={productcards.slice(10, 16)} />
      <ProductSection title="Featured" products={productcards.slice(14, 20)} />
      <div className="">
        {discover.slice(2, 3).map((card, key) => (
          <div key={key} className="flex align-center justify-center">
            <DiscoverMore title={card.title} img1={card.img1} img2={card.img2} />
          </div>
        ))}
      </div>
      <ProductSection title="Casual" products={productcards.slice(12, 18)} />

      <SocialMedia/>

      
    </section>
    <Footer />
  </div>
  )
}

export default Women
