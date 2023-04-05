import React, { useState } from "react";
import { Link } from "react-router-dom";

const MicrowaveOvenService = () => {
  const [cart, setCart] = useState([]);
  const [services, setData] = useState([
    {
      id: 1,
      title: "Service",
      image:
        "https://www.bdshop.com/pub/media/catalog/product/cache/eaf695a7c2edd83636a0242f7ce59484/r/i/sharp-38-liters-rice-cooker-ksh-740-in-bd-at-bdshopcom.jpg",
      price: 450,
      quantity: 0,
    },
    {
      id: 2,
      title: "Service",
      image:
        "https://www.bdshop.com/pub/media/catalog/product/cache/eaf695a7c2edd83636a0242f7ce59484/r/i/sharp-38-liters-rice-cooker-ksh-740-in-bd-at-bdshopcom.jpg",
      price: 450,
      quantity: 0,
    },
    {
      id: 3,
      title: "Service",
      image:
        "https://www.bdshop.com/pub/media/catalog/product/cache/eaf695a7c2edd83636a0242f7ce59484/r/i/sharp-38-liters-rice-cooker-ksh-740-in-bd-at-bdshopcom.jpg",
      price: 450,
      quantity: 0,
    },
  ]);

  const addCart = (ser) => {
    let arr = [];
    arr = [...cart, ser];
    setCart(arr);
  };

  console.log(cart);
  return (
    <div>
      <button>Cart</button>
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={service.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">title</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button onClick={() => addCart(service)}>add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicrowaveOvenService;
