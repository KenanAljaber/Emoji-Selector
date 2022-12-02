import Editor from "./Components/Editor";
import SendBar from "./Components/SendBar";
import "./Styles/app.css"

function App() {



  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1 style={{background:"#202124",marginBottom:"50px",color:"#d3f9ff",display:"inline-block",padding:"10px",borderRadius:"10px"}}>Emoji Selector</h1>
      <div className="sendBar-container">
       <Editor/>
       </div>
    </div>
  );
}

export default App;
