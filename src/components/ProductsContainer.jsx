import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsContainer = () => {
  const cardsPerSlide = 3;
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [kidsProducts, setKidsProducts] = useState([]);

  const [currentIndexMen, setCurrentIndexMen] = useState(0);
  const [currentIndexWomen, setCurrentIndexWomen] = useState(0);
  const [currentIndexKids, setCurrentIndexKids] = useState(0);

  const totalSlidesMen = Math.ceil(menProducts.length / cardsPerSlide);
  const totalSlidesWomen = Math.ceil(womenProducts.length / cardsPerSlide);
  const totalSlidesKids = Math.ceil(kidsProducts.length / cardsPerSlide);

  // Fetch products and filter by category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = collection(db, "product");
        
        // Fetch products for Men category
        const menQuery = query(productCollection, where("category", "==", "men"));
        const menSnapshot = await getDocs(menQuery);
        const menData = menSnapshot.docs.map(doc => doc.data());
        setMenProducts(menData);

        // Fetch products for Women category
        const womenQuery = query(productCollection, where("category", "==", "women"));
        const womenSnapshot = await getDocs(womenQuery);
        const womenData = womenSnapshot.docs.map(doc => doc.data());
        setWomenProducts(womenData);

        // Fetch products for Kids category
        const kidsQuery = query(productCollection, where("category", "==", "kids"));
        const kidsSnapshot = await getDocs(kidsQuery);
        const kidsData = kidsSnapshot.docs.map(doc => doc.data());
        setKidsProducts(kidsData);
        
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const getProductSlides = (products) => {
    const slides = [];
    for (let i = 0; i < products.length; i += cardsPerSlide) {
      slides.push(products.slice(i, i + cardsPerSlide));
    }
    return slides;
  };

  const menSlides = getProductSlides(menProducts);
  const womenSlides = getProductSlides(womenProducts);
  const kidsSlides = getProductSlides(kidsProducts);

  const handleDotClick = (index, category) => {
    if (category === 'men') setCurrentIndexMen(index);
    if (category === 'women') setCurrentIndexWomen(index);
    if (category === 'kids') setCurrentIndexKids(index);
  };

  return (
    <div className="w-full mt-10 p-10">
      {/* Men Category */}
      <h1 className="text-5xl font-bold">Mens Latest</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndexMen * (100 / totalSlidesMen)}%)` }}
          >
            {menSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex justify-between w-full">
                {slide.map((card, key) => (
                  <ProductCard
                    key={key}
                    image={card.image}
                    name={card.name}
                    price={card.price}
                    etoile={card.etoile}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container flex justify-center mt-4">
          {Array.from({ length: totalSlidesMen }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndexMen === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index, 'men')}
            />
          ))}
        </div>
      </div>

      {/* Women Category */}
      <h1 className="text-5xl font-bold mt-10">Womens Latest</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndexWomen * (100 / totalSlidesWomen)}%)` }}
          >
            {womenSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex justify-between w-full">
                {slide.map((card, key) => (
                  <ProductCard
                    key={key}
                    image={card.image}
                    name={card.name}
                    price={card.price}
                    etoile={card.etoile}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container flex justify-center mt-4">
          {Array.from({ length: totalSlidesWomen }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndexWomen === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index, 'women')}
            />
          ))}
        </div>
      </div>

      {/* Kids Category */}
      <h1 className="text-5xl font-bold mt-10">Kids Latest</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndexKids * (100 / totalSlidesKids)}%)` }}
          >
            {kidsSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex justify-between w-full">
                {slide.map((card, key) => (
                  <ProductCard
                    key={key}
                    image={card.image}
                    name={card.name}
                    price={card.price}
                    etoile={card.etoile}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container flex justify-center mt-4">
          {Array.from({ length: totalSlidesKids }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndexKids === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index, 'kids')}
            />
          ))}
        </div>
      </div>

      <style>{`
        .flex {
          display: flex;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .dots-container {
          margin-top: 20px;
        }
        .dot {
          height: 12px;
          width: 12px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .dot.active {
          background-color: #1E1E1E; 
        }
      `}</style>
    </div>
  );
};

export default ProductsContainer;
