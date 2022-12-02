import { useState } from "react";
import MessageDisplay from "./MessageDisplay";
import SendBar from "./SendBar";

const Editor = () => {
    const [message,setMessage]=useState(null);

    const send=(newMessage)=>{
        setMessage(newMessage);
    }
    return ( 
        <div>
            <MessageDisplay message={message}/>
            <SendBar setMessage={setMessage}/>
        </div>

     );
}
 
export default Editor;