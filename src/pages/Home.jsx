import React from 'react';
import ProductCard from '../components/ProductCard';
import ss2 from "../assets/shirts2.jpeg"
import t1 from "../assets/tshirts.jpeg"
import p1 from "../assets/pant1.jpeg"


const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium-tshirts',
      price: '₹799',
      image: t1
    },
    {
      id: 2,
      name: "white pant",
      price: '₹899',
      image: p1
    },
    {
      id: 3,
      name: 'printed-shirts',
      price: '₹799',
      image: ss2
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="bg-orange-500 text-white rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Orange Fashion</h1>
          <p className="text-xl mb-6">Discover our premium collection of clothing</p>
          <a 
            href="/products" 
            className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">We use only the finest materials for our products.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your order delivered within 3-5 business days.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Easy Payment</h3>
            <p className="text-gray-600">Multiple payment options including WhatsApp orders.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;