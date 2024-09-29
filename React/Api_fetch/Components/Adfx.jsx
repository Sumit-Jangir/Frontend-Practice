import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios";
import './Random.css';

function Random() {
    const [loading, setLoading] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [Search ,setSearch]=useState("");
    const [Sort,setSort]=useState("")
    const fetch = async () => {
        const data = await axios.get('https://fakestoreapi.com/products');
        setLoading(data.data);
        setLoadingData(false);
    };

    useEffect(() => {
        fetch();
        
    }, []); 
   
        const Filter=loading.filter((item)=>{
            return item.title.toLowerCase().includes(Search.toLocaleLowerCase()) || item.description.toLowerCase().includes(Search.toLocaleLowerCase()) || item.category.toLowerCase().includes(Search.toLocaleLowerCase())
            })
    
const Sorttest=()=>{
if(Sort=='a'){
    return [...Filter].sort((a,b)=>(a.price-b.price))
}
if(Sort=='b'){
    return [...Filter].sort((a,b)=>(b.price-a.price))
}
return Filter
}
    

    return (
        <>
        <input type="search" onInput={(e)=>setSearch(e.target.value)}/>
<button onClick={()=>setSort('a')}>high to low</button>
<button onClick={()=>setSort('b')}>low to high</button>
        <div className="main">
            <div className="card_container">
               {loadingData ? <h1>please wait kar le</h1>:(
                Sorttest().map((item) => (
                    <div className="ecommerce-card" key={item.id}>
                        <h1 className="item-id">{item.id}</h1>
                        <h2 className="item-title">{item.title}</h2>
                        <h3 className="item-price">${item.price}</h3>
                        <p className="item-description">{item.description}</p>
                        <h4 className="item-category">{item.category}</h4>
                        
                        <LazyLoadImage 
                        className="item-image"
                        src={item.image}
                     effect="blur"
                        />
                      
                    </div>
                ))
               )}
                
            </div>
        </div>
        </>
    );
}

export default Random;
