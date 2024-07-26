const MainPage = () => {
  return (
    <div className="bg-slate-50	w-full min-h-screen">
      <div className="carousel carousel-end ">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Drink"
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-teal-900 my-4 mx-4">Our Top Books</h2>
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center">
              <div className="card w-96 bg-gray-50 shadow-xl flex flex-col">
                <figure className="px-4 pt-4 flex-grow">
                  <img
                    src="https://cdn.waterstones.com/bookjackets/large/9781/8049/9781804942369.jpg"
                    alt="Book"
                    className="rounded-xl h-full object-cover"
                  />
                </figure>
                <div className="card-body items-start text-center">
                  <h4 className="text-teal-900">Murder on Lake Garda</h4>
                  <h6 className="text-teal-900">Author1</h6>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card w-96 bg-gray-50 shadow-xl flex flex-col">
                <figure className="px-4 pt-4 flex-grow">
                  <img
                    src="https://cdn.waterstones.com/override/v1/large/9781/8008/9781800818026.jpg"
                    alt="Book"
                    className="rounded-xl h-full object-cover"
                  />
                </figure>
                <div className="card-body items-start text-center">
                  <h4 className="text-teal-900">
                    Murdle - Murdle Puzzle Series
                  </h4>
                  <h6 className="text-teal-900">Author1</h6>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card w-96 bg-gray-50 shadow-xl flex flex-col">
                <figure className="px-4 pt-4 flex-grow">
                  <img
                    src="https://cdn.waterstones.com/bookjackets/large/9780/0085/9780008532819.jpg"
                    alt="Book"
                    className="rounded-xl h-full object-cover"
                  />
                </figure>
                <div className="card-body items-start text-center">
                  <h4 className="text-teal-900">Yellow face</h4>
                  <h6 className="text-teal-900">Author1</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
