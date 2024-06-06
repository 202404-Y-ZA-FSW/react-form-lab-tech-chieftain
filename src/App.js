
import Form from "./Components/Forms/Forms";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

export default function Home() {
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
        <Form />
        <ShoppingList />
      </div>
    </div>
  );
}
