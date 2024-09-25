import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import HeaderData from './HeaderData';

const SideNav = () => {
  const [data ,setData] = useState([]);

useEffect(()=>{
  setData(HeaderData);

},[])
  return (
    <div className="nav-main">
       <ul className="nav-list">
       {HeaderData.map((item,i)=>
          <li key={i}>
            <Link className=" nav-link" to={item.href}>
              {item.title}
            </Link>
          </li>
          )}
          {/* <li>
            <Link className="nav-link" to={"/about"}>
            About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/blog"}>
            Blog
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/items"}>
            Items
            </Link>
          </li> */}
        </ul>
      </div>
  )
}

export default SideNav