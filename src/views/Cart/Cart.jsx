import React from "react";

const Cart = ({ cart }) => {
  // const totalPrice = cart.map((pri) => {
  //   return pri.price;
  // });

  // console.log(totalPrice);

  const sum = cart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  // console.log(sum);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-1  w-4/5 m-0 mx-auto">
        <div>
          <h2>Confirm your order here</h2>
          {cart.length > 0 ? (
            cart.map((car, index) => (
              <div key={index} className="col-span-2 border border-sky-500">
                {/* <h2>Confirm your order here</h2> */}
                <div className="grid grid-cols-3 mt-4">
                  <div>
                    <img className="w-16" src={car.image} alt="" />
                  </div>
                  <div>
                    <h2>{car.title}</h2>
                  </div>
                  <div>
                    <h2>{car.price} TK</h2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2">
              <h2>No data found</h2>
            </div>
          )}
        </div>

        <div className="border border-sky-500">
          <h2>Order Details</h2>
          <div>
            <div className="form-control  ">
              <label className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Have A Cupon"
                  className="input input-bordered"
                />
                <button className="bg-green-700 text-white">Redeem</button>
              </label>
            </div>
            <div>
              <div className="border-b-4 border-indigo-500">
                <div className="flex justify-evenly">
                  <h2>Subtotal:</h2>

                  <h2>{sum}</h2>
                </div>
                <div className="flex justify-evenly">
                  <p>Repair Delivery Fee:</p>
                  <p>0 TK</p>
                </div>
              </div>

              <div className="flex justify-evenly">
                <h2>Grand Total:</h2>
                <h2>{sum}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
