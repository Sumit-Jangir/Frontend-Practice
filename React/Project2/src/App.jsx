import "./App.css";
import react, { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  async function APIFetech() {
    const API = await fetch("https://dummyjson.com/products");
    const JSON_DATA = await API.json();
    setProduct(JSON_DATA.products);

    // console.log(JSON_DATA);
  }

  const searchProduct = () => {
    if (search == "") {
      setProduct(filtered);
      console.log("hlo")
    } else {
      const filtered = product.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase());
      });
      setProduct(filtered);
    }
  };
  useEffect(() => {
    APIFetech();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <div className="col-8">
            <input
              type="search"
              placeholder="Search item"
              className="form-control"
              onInput={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-4">
            <button onClick={() => searchProduct()} className="btn btn-primery">
              Search
            </button>
          </div>
        </div>

        <div className="row">
          {product.map((item) => (
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.thumbnail} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h3>Rs {item.price}</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
