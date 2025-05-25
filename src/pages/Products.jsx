import React from 'react';
import ProductCard from '../components/ProductCard';
import s1 from "../assets/shirt1.jpeg"
import s2 from "../assets/shirt2.jpeg"
import ss1 from "../assets/shirts1.jpeg"
import p1 from "../assets/pant1.jpeg"
import ss2 from "../assets/shirts2.jpeg"
import t1 from "../assets/tshirts.jpeg"

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'white pant',
      price: '₹999',
      image: p1,
      category: 'jeans'
    },
    {
      id: 2,
      name: 'maroon shirt',
      price: '₹799',
      image: s2,
      category: 'tshirts'
    },
    {
      id: 3,
      name: 'Formal Shirt',
      price: '799',
      image: s1,
      category: 'shirts'
    },
    {
      id: 4,
      name: 'shirts',
      price: '₹1399',
      image: ss1,
      category: 'jeans'
    },
    {
      id: 5,
      name: 'Printed-Shirt',
      price: '₹899',
      image: ss2,
      category: 'shirts'
    },
    {
      id: 6,
      name: 'premium t-shirts',
      price: '₹1,599',
      image: t1,
      category: 'tshirts'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">All</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Jeans</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">T-Shirts</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Shirts</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition">Formals</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;