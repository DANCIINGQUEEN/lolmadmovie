import './App.css';

import HorizonLine from "./HorizonLine";
import VideoLink from "./VideoLink";


function App() {



    // const q1 = Object.entries(titleAndLink).map((LL) => LL[1].title)
    // const q2 = Object.entries(titleAndLink).map((LL) => LL[1].link)
    // const q3 = Object.entries(titleAndLink).map((LL) => LL)
    // console.log(q1)
    // console.log(q2)
    // console.log(q3)

    return (

        <div className="App">
            <h1>칼바람 하이라이트</h1>
            <HorizonLine text={"칼바람팸과"}/>
            <VideoLink/>
        </div>

    );
}

export default App;


//google auth client ID
//827833484558-8pjed0na6c9o63m985hgiub9ev7285ba.apps.googleusercontent.com\

//google auth client password
//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


