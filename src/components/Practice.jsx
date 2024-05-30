import { useState } from "react";

// practice items: text, number, textarea,select, radio,

const Practice = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <input type="text" value={name} onChange={(e) => handleNameChange(e)} />

      <h1>Quantity: {quantity}</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleQuantityChange(e)}
      />

      <h1>Feedback: {comment}</h1>
      <textarea value={comment} onChange={(e) => handleCommentChange(e)} />
    </div>
  );
};

export default Practice;
