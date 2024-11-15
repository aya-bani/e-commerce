const ExploreProducts = () => {
    return (
      <div className="w-full bg-white py-8"> 
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-4 " >
          <div>
            <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
            <div>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...
              <br />
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src="src/assets/images/bag.png" alt="Bag" />
              <img src="src/assets/images/jewlery.png" alt="Jewelry" />
            </div>
            <div>
              <img src="src/assets/images/woman.png" alt="Woman" />
              <img src="src/assets/images/pants.png" alt="Pants" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExploreProducts;
  