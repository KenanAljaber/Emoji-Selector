import Editor from "./Components/Editor";
import SendBar from "./Components/SendBar";
import "./Styles/app.css"

function App() {



  return (
    <div className="App" style={{textAlign:"center",marginTop:"10%"}}>
      <h1 style={{background:"#B01321",marginBottom:"50px",color:"#FFE1E4",display:"inline-block",padding:"10px",borderRadius:"10px"}}>Emoji Selector</h1>
      <div className="sendBar-container">
       <Editor/>
       </div>
    </div>
  );
}

export default App;
