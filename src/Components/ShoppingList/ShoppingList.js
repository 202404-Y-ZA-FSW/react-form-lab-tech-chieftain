export default function ShoppingList(props) {
  return (
    <div className="shopping-cart">
      <h3>Shopping cart</h3>
      <ul>
        {/* 
          Map over the cart array and display each item in a list
         */}
        {props.cart.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
