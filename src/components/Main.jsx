import React from "react";

function Main() {
  return (
    <div className="bg-black">
      <section
        className="relative bg-cover bg-center h-screen "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Step Into Comfort</h1>
          <p className="mt-4 text-xl">
            Explore the latest collection of high-quality shoes
          </p>
          <a
            href="#"
            className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-600"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Men's Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Men's Shoes</h3>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Women's Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Women's Shoes</h3>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Kids' Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Kids' Shoes</h3>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562183241-840b8af0721e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Running Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Running Shoes</h3>
                <p className="mt-2 text-gray-600">$120.00</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533681018184-68bd1d883b97?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Basketball Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Basketball Shoes</h3>
                <p className="mt-2 text-gray-600">$140.00</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Casual Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Casual Shoes</h3>
                <p className="mt-2 text-gray-600">$100.00</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Training Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Training Shoes</h3>
                <p className="mt-2 text-gray-600">$130.00</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-slate-600 hover:text-slate-800"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
