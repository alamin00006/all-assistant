import React from 'react';

const CheckPriceModal = () => {
    return (
        <div>
            {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">Check Price</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle " />
<div className="modal ">
  <div className="modal-box relative bg-white glass">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Thanks For Your Interest!</h3>
    <h1 className="text-sm">We will connect very soon</h1>
    <h1 className="text-sm">__________________________________________________</h1>
    <p className="py-4">Please Provide Few Pictures of the items you want to shift.</p>
    <p className="py-4 text-sm">To This whats up no: +8801406799844</p>
    <p className="py-4 text-sm">It will help us to share a best price quate for.</p>
  </div>
</div>
        </div>
    );
};

export default CheckPriceModal;