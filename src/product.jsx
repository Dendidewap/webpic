import React, { useState, useEffect } from "react";

const Product = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container  ">
      <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-9 gap-y-0.5 ">
        {products.map((produk) => {
          return (
            <CardProduct
              key={produk.id}
              title={produk.title}
              description={produk.description}
              price={produk.price}
              image={produk.image}
            />
          );
        })}
      </div>
    </div>
  );
};

const CardProduct = (props) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg mt-15 bg-white w-60 h-110 "
      key={props.id}
    >
      <img
        className="w-[75%] ml-8 mt-10 h-50"
        src={props.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
          {props.title.substring(0, 15)}...
        </div>

        <p className="text-gray-700  text-xs">USD {props.price}$</p>
        <p className="text-gray-700  text-xs">
          {props.description.substring(0, 75)}...
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mt-4">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
