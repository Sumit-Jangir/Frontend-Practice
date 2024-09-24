import React , {useState,useEffect} from "react";
import axios from 'axios';

function Data() {
  const [fetch, setFetch] = useState([]);

  async function fetchData() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFetch(res.data);
  }

  useEffect(() => {
    fetchData();
  },[]);
  console.log(fetch);

  return (
      <div className="row">
        {fetch.map((item,i) => (
          <div className="card" key={i} style={{ width: "20rem" }}>
            <img src={item.image} className="card-img-top" alt="..." height={300} width={200} />

            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h3>$ {item.price}</h3>
              <h6>Rating: {item.rating.rate}</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        ))}
      </div>
  );
}

export default Data;
