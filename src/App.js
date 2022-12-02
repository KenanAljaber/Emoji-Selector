import Editor from "./Components/Editor";
import SendBar from "./Components/SendBar";


function App() {



  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1 style={{margin:"50px",color:"#466848"}}>Emoji Selector</h1>
      <div className="sendBar-container">
       <Editor/>
       </div>
    </div>
  );
}

export default App;
