import "../Styles/messageDisplay.css"
const MessageDisplay = ({message}) => {

        
    return ( 

        <div className="messagesDisplay">
           {message? <div>
            <p>{message}</p>
           </div>:"Type something "}

        </div>
     );
}
 
export default MessageDisplay;