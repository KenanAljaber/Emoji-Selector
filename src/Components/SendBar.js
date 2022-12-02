import { useRef } from "react";
import "../Styles/sendBar.css"
import EmojiSelector from "./EmojiSelector";
import sendMessage from "../assets/send.png";


const SendBar = ({setMessage}) => {
    //&#x1F600;
    const inputRef=useRef(null);
   

  function handleClick(e){
    const test=inputRef.current.value;
    setMessage(test);
    inputRef.current.value="";
  }
 
  
    

    return (
        <div className="editor-container">
            <input type="text" placeholder="type a message" className="messageInput" ref={inputRef}/>
            <EmojiSelector inputRef={inputRef}/>
            <img src={sendMessage} className="sendImg" onClick={handleClick}/>
        </div>
      );
}
 
export default SendBar;