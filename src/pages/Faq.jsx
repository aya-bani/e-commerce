import Navbar from "C:/Users/Aya Bani/projets/e-commerce/src/components/Navbar.jsx"; 
import Footer from "C:/Users/Aya Bani/projets/e-commerce/src/components/Footer.jsx";

const Faq = () => {
  return (
    <div className="bg-white">
        <Navbar />
        <div >
            <div className="pt-12 px-12">
                <h1 className="text-start font-bold text-center text-3xl mb-4 text-black  ">Hexashop FAQ’S</h1>
                <div className="w-[50vw]">
                     <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <div className="bg-[#D9D9D9] p-12 my-24">
                <h1 className="text-start font-bold  text-3xl mb-4 text-black"> Get  Started Shopping With Hexashop</h1>
                
                <div className="grid gap-8 md:grid-cols-2">
                <div>
                <p className="text-start font-bold text-xl mb-4 text-black">
                What Is Hexashop and How It’s Sold?
                </p>
                <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker, including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
            <div >
                <p className="text-start font-bold text-xl mb-4 text-black">
                Can I Get a Fashion Designer Here?
                </p>
                <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker, including versions of Lorem Ipsum.
                </p>
            </div>
            </div>

            <div className="flex justify-center">
                <a href=""><button className="text-black py-2 px-4 border border-[#000000] hover:bg-[#000000] hover:text-white transition">Discover More</button></a>
            </div>
            </div>
        </div>
            <Footer />
    </div>
            )
            }
export default Faq
