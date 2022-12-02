import "../Styles/messageDisplay.css"
const MessageDisplay = ({message}) => {

        
    return ( 

        <div className="messagesDisplay">
           {message? <div>
            <p>{message}</p>
           </div>:"😃😄😁🥰😇🙃😜😛😋"}

        </div>
     );
}
 
export default MessageDisplay;