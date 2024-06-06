export default function Form() {
  return (
    <form>
      <h3>Shopping cart</h3>
      <div className="mb-3">
        <label>Item</label>
        <input type="text" className="form-control" placeholder="item" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
