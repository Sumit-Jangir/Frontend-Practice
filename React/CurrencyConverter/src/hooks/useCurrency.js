import axios from "axios";
import { useEffect, useState } from "react";


function useCurrency(currency){
    const [data ,setData] = useState({})
    useEffect(()=>{
        axios.get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res) => setData(res.data.rates)) 
        console.log(data)
    },[currency]);

    return data;
}
export default useCurrency;
