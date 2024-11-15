const Herosection = () => {
    return (
        <div className="bg-gray-100 flex align-center justify-center w-full ">
        <div className="flex align-center justify-center w-full  w-3/5 gap-2 m-4"> 
            <div className="flex ">
                <img src="src/assets/images/shopping.png" alt="Shopping" className="object-cover " />
            </div>
  
            <div className="flex p-2  align-center justify-center "> 
                <div >
                    <img src="src/assets/images/women.png" alt="Women" className="w-auto object-contain " />
                    <img src="src/assets/images/men.png" alt="Men" className="w-auto object-contain " />
                </div>

                <div>
                    <img src="src/assets/images/kids.png" alt="Kids" className="w-auto object-contain " />
                    <img src="src/assets/images/accessories.png" alt="Accessories" className="w-auto object-contain " />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Herosection;
