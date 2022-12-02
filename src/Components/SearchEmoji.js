import { useRef, useState } from "react";
import searchImg from "../assets/search.png";
import cancelImg from "../assets/close.png";
import "../Styles/searchEmoji.css"
const SearchEmoji = ({searchEmoji}) => {
    const inputref=useRef();
    const [searchIcon,setSearchIcon]=useState(searchImg);
    const [searched,setSearched]=useState(false);

  

    function handleChange(){
        searchEmoji(inputref.current.value);
        }

    return (

    <div className="searchContainer">
        <input className="searchContainer-input" placeholder="search for emoji" type="text" ref={inputref} onChange={handleChange}/>
      
    </div>


      );
}
 
export default SearchEmoji;//  <img src={searchIcon}  onClick={handleClick} width="25px"/>