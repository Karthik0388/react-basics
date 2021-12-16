// class Based Component

// import React , {Component} from 'react';

// class App extends Component{
//     render(){
//         return (
//         <>
//         <h1>Welcome to class based component</h1>
//         </>
//         );
//     }
// }

// export default App;


// import React, { Component } from 'react'
// import Header from './Components/HeaderComponents/Header';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Header/>
//             </div>
//         )
//     }
// }

// export default App;

class App extends React.Component{
    // constructor(){
    //     super();
    //   this.state = {
    //         username:"Karthik",
    //         company:"Tyss"
    //     }
    //}
    state= {
    

    }
    render(){
        return <h1>{this.state.username}</h1>
               
    }
}

export default App

