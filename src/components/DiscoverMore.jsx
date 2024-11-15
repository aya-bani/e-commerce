const DiscoverMore = ({ title, img1, img2 }) => {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  bg-[#E9E9E9] mb-16 p-8"       style={{ backgroundImage: 'url("src/assets/images/kids_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex  items-center align-center justify-center ">
            <div><img src={img1} alt="Description for img1"  /></div>
          <div><img src={img2} alt="Description for img2"  /></div>
        </div>
        <div className="flex flex-col justify-center w-3/5  items-center">
          <p className="font-bold text-2xl text-white  mb-8">{title}</p>
          <p className="text-lg text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <br />
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
          </p>
          <a href="">
            <button className="border border-white text-white py-2 px-4 mt-4 hover:bg-white hover:text-black transition-colors duration-300">
              Discover More
            </button>
          </a>
        </div>
      </div>
    );
  };
  
  export default DiscoverMore;
  