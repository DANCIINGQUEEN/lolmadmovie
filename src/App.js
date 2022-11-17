import './App.css';
import VideoLink from "./VideoLink";
import React from "react";
// import NewLink from "./NewLink";

function App() {
    return (
        <div className="App">
            <h1>
                <span style={{color:"blue"}}>칼</span>
                <span style={{color:"skyblue"}}>바</span>
                <span style={{color:"red"}}>람</span>
                <span>&nbsp;</span>
                <span style={{color:"purple"}}>하</span>
                <span style={{color:"grey"}}>이</span>
                <span style={{color:"greenyellow"}}>라</span>
                <span style={{color:"orange"}}>이</span>
                <span style={{color:"hotpink"}}>트</span>
            </h1>
            <VideoLink/>
        </div>
    );
}

export default App;
