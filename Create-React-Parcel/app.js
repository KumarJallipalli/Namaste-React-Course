
import React  from "react";
import ReactDOM  from "react-dom/client";

/**
 *  1. Creating elements using JS
*/
const h1 = document.createElement("h1")
h1.innerHTML = "This is 'h1' Element using JS";

const container = document.getElementById("root");
container.appendChild(h1);




/**
 *  2. Creating elements using React
*/
const header1 = React.createElement("h1", {
    id:"h1",
    style: {
        color: "Orange",
    }
}, "This is 'h1' created using React");

const header2 = React.createElement("h2", {
    id:"h2",
    style: {
        color: "violet",
    }
}, "This is 'heading2' created using React");

const div = React.createElement("div", {
    id:"div",
    style: {
        backgroundColor: "yellow"
    }
}, [header1, header2]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

