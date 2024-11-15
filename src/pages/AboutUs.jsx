import Navbar from  "C:/Users/Aya Bani/projets/e-commerce/src/components/Navbar.jsx" ; 
import Footer from "C:/Users/Aya Bani/projets/e-commerce/src/components/Footer.jsx"
const AboutUs = () => {
  return (
    <div className="">
      <Navbar/>
      <div className=" mx-auto  p-16 mb-16"  style={{ backgroundImage: 'url("src/assets/images/womanbg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="font-bold text-center text-3xl mb-4 text-white" >About Us</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#FFA92E] p-4 flex items-center flex-col justify-center h-64  ">
          <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p> 
        </div>
        <div className=" p-4 flex items-center flex-col justify-center h-64 bg-white  ">
          <h2 className="text-2xl font-semibold mb-4">Vision Statement</h2>
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard 
 dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-8 h-full"> 
  <div className="p-4 flex items-center flex-col justify-center bg-white ">
    <h2 className="text-2xl font-semibold mb-4">Target Market Summary</h2>
    <img src="src/assets/images/people walking 1.png" alt="Target Market Image" className="w-full h-auto" />
  </div>

  <div className="col-span-2 h-full flex flex-col ">
    <div className="bg-[#D9D9D9] p-4 h-1/2 flex items-center flex-col justify-center ">
      <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
      <p className="text-xl ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    
    <div className="bg-yellow-200 p-4 mt-8 h-1/2 flex items-center flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-4">Brief Company History</h2>
      <p className="text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
</div>

     
    
    </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
