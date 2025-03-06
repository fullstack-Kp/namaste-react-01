import React from 'react'
import ReactDOM from 'react-dom/client';

//    To create a h1 element in react we use React.createReact() method which takes 3 parameter 1. element name, 2.an object 3. the content which we want to use in React 
// here we have {} : This is use for giving attribute to our tag , we can give multiple attributes..
const heading = React.createElement(
    "h1" ,
     {id:"heading"} ,
     "hello from React")

     //Create Nested element in react
    //  const parent = React.createElement(
    //     "div" ,
    //      {id:"parent"} ,
    //      React.createElement("div" , {id: "child" }, React.createElement("h1" , {} , "I am h1 tage")))

    //  Here this "heading" is nothing but a react element and react element is a simple JS object
    console.log(heading) // This will give us a object

// Now we need to create root for React where React will do all dom manipulation
const root = ReactDOM.createRoot(document.getElementById("root")) 

// To render heading we need to use render method. This render methods takes that object and converts it to a simple <h1></h1> tag
root.render(heading)


// How to create nested html structure in react? If we have mutiple children then we can pass it in array 
// ex: [React.createElement("div" , {id: "child" },React.createElement("div" , {id: "child" }]