import React from 'react';

const ProductCard = ({ product }) => {
  const whatsappMessage = `Hi, I'm interested in ${product.name} (${product.price}). Can you provide more details?`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-orange-500 font-bold mt-2">{product.price}</p>
        <div className="mt-4">
          <a 
            href={`https://wa.me/9550518821?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md inline-block transition"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;