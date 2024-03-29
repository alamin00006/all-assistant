import React, { useState } from "react";

const RiceCookerService = ({ addCart }) => {
  // console.log(addCart);
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

  // useEffect(() => {
  //   fetch("technician.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // const [productNumber, setProductNumber] = useState(0);
  // const increaseNumber = (id) => {
  //   let newP = [];
  //   const exe = services.filter((ser) => ser.id !== id);
  //   const product = services.find((ser) => ser.id === id);
  //   if (product) {
  //     product.quantity = product.quantity + 1;
  //     newP = [...exe, product];
  //   }
  //   setData(newP);

  //   // setProductNumber(productNumber + 1);
  // };
  // const dicreseNumber = () => {
  //   // setProductNumber(productNumber - 1);
  // };
  // console.log(services);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-end">
      {services.map((service) => (
        <div key={service.id} className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img className="w-16" src={service.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-lg"
                onClick={() => addCart(service)}
              >
                add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiceCookerService;
