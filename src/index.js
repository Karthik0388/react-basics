import React from "react";
import ReactDom from "react-dom";
import App from './App.jsx'
// import FunctionalComponent from "./FunctionalComponent.jsx";


// let element = React.createElement('h1',null,"We Love react");

// reactDom.render(element,document.getElementById("root"));



// Without JSX
// let form = React.createElement('form',{formMethod:"GET",formAction:"#"},
// React.createElement('input',{type:"text",name:"username",placeholder:"Enter username"},
// React.createElement("input",{type:"radio",name:"male"},"Male")),
// React.createElement("button",{className:"btn"},"submit"),
// )

// ReactDom.render(form,document.getElementById("root"));

//JSX

// let form = <form method="GET" action="#">
//     <input type="text" name="username" placeholder="Enter username"></input>
//     <button className="btn">Submit</button>
// </form>

// ReactDom.render(form,document.getElementById("root"));

// class based component
// class App extends React.Component{
//     render(){
//         return <h1>I am Class based component</h1>
//     }
// }

// Functional based component
// function AppWithFunction(){
//     return <h1>I am Functional Based component</h1>
// }

// ReactDom.render(<AppWithFunction/>,document.getElementById("root"));

// ReactDom.render(<App/>,document.getElementById("root"));
// ReactDom.render(<FunctionalComponent/>,document.getElementById("root"));





//******************************************************************* */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>,document.getElementById("root"));