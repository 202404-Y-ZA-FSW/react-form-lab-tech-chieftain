import { useState } from "react";
export default function Form(props) {
  // Create a state for the item input
  const [item, setItem] = useState("");

  // Create a function that will handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    props.setCart([...props.cart, item]);
  };

  return (
    // Create a form that will handle the submission of the item. When the form is submitted, the handleSubmit function will be called.
    <form onSubmit={handleSubmit}>
      <h3>Shopping cart</h3>
      <div className="mb-3">
        <label>Item</label>
        <input
          type="text"
          className="form-control"
          placeholder="item"
          // Set the value of the input to the item state
          value={item}
          // Update the item state when the input changes. Notice how I used the setItem function to update the state which was passed as a prop.
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
