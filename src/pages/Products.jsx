import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Jeans',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'jeans'
    },
    {
      id: 2,
      name: 'Casual T-Shirt',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'tshirts'
    },
    {
      id: 3,
      name: 'Formal Shirt',
      price: '₹1,199',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'shirts'
    },
    {
      id: 4,
      name: 'Slim Fit Jeans',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'jeans'
    },
    {
      id: 5,
      name: 'Printed T-Shirt',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'tshirts'
    },
    {
      id: 6,
      name: 'Office Formals',
      price: '₹1,599',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'formals'
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