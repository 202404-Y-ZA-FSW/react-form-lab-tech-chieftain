import Form from "./Components/Forms/Forms";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import { useState } from "react";
export default function Home() {
  // Create a cart state that will be passed to the Form and ShoppingList components
  const [cart, setCart] = useState([]);

  return (
    <div style={{ width: "100vw" }}>
      <title>Create Next App</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />

      <div className="card">
        {/* Pass the cart and setCart to the form so we can update the state of the cart with our new items */}
        <Form setCart={setCart} cart={cart}/>
        {/* Pass the cart to the shopping list so we can display the items in the cart */}
        <ShoppingList cart={cart} />
      </div>
    </div>
  );
}
