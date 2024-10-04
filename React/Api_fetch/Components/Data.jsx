import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function Data() {
  const [fetch, setFetch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [ratingVal, setRatingVal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [view, setView] = useState([]);


  async function fetchData() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFetch(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Filter = fetch.filter((item) => {
    return (
      item.title?.toLowerCase().includes(search?.toLowerCase() || "") ||
      item.description?.toLowerCase().includes(search?.toLowerCase() || "") ||
      item.category?.toLowerCase().includes(search?.toLowerCase() || "")
    );
  });

  const Sorttest = () => {
    const ratingValue = ratingVal;
    const filteredByRating = Filter.filter(
      (item) => item.rating.rate >= ratingValue
    );

    if (sort === "a") {
      return [...filteredByRating].sort((a, b) => a.price - b.price);
    }
    if (sort === "b") {
      return [...filteredByRating].sort((a, b) => b.price - a.price);
    }

    return filteredByRating;
  };


  const closeModal = () => {
    setSelectedProduct(false); 
    
  };

  async function viewData(id) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setView(res.data);
    setSelectedProduct(true);
    console.log(view);
  }

  return (
    <div className="main">
      <input
        type="search"
        onInput={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <button onClick={() => setSort("a")}>Low to high</button>
      <button onClick={() => setSort("b")}>High to low</button>
      <label htmlFor="Rating">Rating:</label>
      <select
        name="Rating"
        id="Rating"
        onChange={(e) => setRatingVal(e.target.value)}
      >
        <option value="1">1 and above</option>
        <option value="2">2 and above</option>
        <option value="3">3 and above</option>
        <option value="4">4 and above</option>
        <option value="5">5</option>
      </select>

      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          Sorttest().map((item, i) => (
            <div className="card" key={i} style={{ width: "20rem" }}>
              <LazyLoadImage
                src={item.image}
                effect="blur"
                className="card-img-top"
                alt={item.title}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h3>$ {item.price}</h3>
                <h6>Rating: {item.rating.rate}</h6>
                <p className="card-text">{item.description}</p>
                <div className="btn">
                  <button className="btn-link">Add To Cart</button>
                  <button className="btn-link" onClick={() => viewData(item.id)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedProduct && view && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{view.title}</h2>
            <img
              src={view.image}
              alt={view.title}
              height={300}
              width={300}
            />
            <h3>$ {view.price}</h3>
            <p>{view.description}</p>
            <p>Category: {view.category}</p>
            <p>Rating: {view.rating.rate}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
