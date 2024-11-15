const Footer = () => {
  return (
    <div className="w-full bg-[#1E1E1E] text-white mt-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 text-base md:text-xl space-y-8 md:space-y-0 md:space-x-8 lg:gap-32">
        
        {/* Logo and Contact Information */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-4 mb-4">
            <img src="src/assets/images/logolight.png" alt="Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl font-bold">HEXASHOP</h1>
              <p className="font-medium">shopping online</p>
            </div>
          </div>
          <p><span className="font-bold">Address:</span> Lahore Road, Sheikhupura</p>
          <p><span className="font-bold">Phone:</span> 0321-1234567</p>
          <p><span className="font-bold">Email:</span> info@yourdomain.com</p>
        </div>
        
        {/* Shopping and Categories */}
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl md:text-2xl">Shopping and Categories</p>
          <p>Mens Shopping</p>
          <p>Womens Shopping</p>
          <p>Kids Shopping</p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl md:text-2xl">Useful Links</p>
          <p>Homepage</p>
          <p>About Us</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        {/* Help & Information */}
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl md:text-2xl">Help & Information</p>
          <p>FAQ’S</p>
          <p>Shipping</p>
          <p>Tracking Id</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black p-4">
        <p className="text-white text-center text-base md:text-xl">Copyright 2024</p>
      </div>
    </div>
  );
}

export default Footer;
