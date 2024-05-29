import { useState } from "react";

const OnChangeInput = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <input
        type="text"
        value={name}
        placeholder="Type your name here"
        onChange={(e) => handleNameChange(e)}
      />

      <h1>Quantity: {quantity}</h1>
      <input
        type="number"
        value={quantity}
        placeholder="How many?"
        onChange={(e) => handleQuantityChange(e)}
      />

      <h2>User Comment: {comment}</h2>
      <textarea
        value={comment}
        placeholder="Type your feedback here."
        onChange={(e) => handleCommentChange(e)}
      />

      <h1>Payment Method: {payment}</h1>
      <select value={payment} onChange={(e) => handlePaymentChange(e)}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Paypal">Paypal</option>
      </select>

      <h1>Shipping: {shipping}</h1>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={(e) => handleShippingChange(e)}
        />
        <b> Pick Up</b>
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={(e) => handleShippingChange(e)}
        />
        <b> Pick Up</b>
      </label>
    </div>
  );
};

export default OnChangeInput;
