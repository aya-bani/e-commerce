import Navbar from "C:/Users/Aya Bani/projets/e-commerce/src/components/Navbar.jsx"; 
import Footer from "C:/Users/Aya Bani/projets/e-commerce/src/components/Footer.jsx";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar/>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="font-bold text-center text-3xl mb-8">Get In Touch</h1>
        <div className="flex justify-center gap-8">

          <div className="bg-white border  shadow-md p-6 flex flex-col items-center text-center max-w-xl">
            <img src="src/assets/images/contact.png" alt="Talk To Sales" className="w-24 mb-4" />
            <h2 className="font-medium text-xl mb-2">Talk To Sales</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="">
              <button className="text-black py-2 px-4 border border-[#000000] hover:bg-[#000000] hover:text-white transition">View all global Members</button>
            </a>
          </div>

          <div className="bg-white border shadow-md p-6 flex flex-col items-center text-center max-w-xl">
            <img src="src/assets/images/customer.png" alt="Contact Customer Support" className="w-24 mb-4" />
            <h2 className="font-medium text-xl mb-2">Contact Customer Support</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="">
              <button className="text-black py-2 px-4 border border-[#000000] hover:bg-[#000000] hover:text-white transition">Customer Support</button>
            </a>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
