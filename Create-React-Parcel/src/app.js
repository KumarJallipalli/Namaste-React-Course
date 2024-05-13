
import React  from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import RestuarantCard from "./components/RestuarantCard";
import Footer from "./components/Footer";


const AppComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)







/****************************************      1st 4 Lecturers Code        ****************************************** */
// /**
//  *  1. Creating elements using JS
// */
// const h1 = document.createElement("h1")
// h1.innerHTML = "This is 'h1' Element using JS";

// const container = document.getElementById("root");
// container.appendChild(h1);




// /**
//  *  2. Creating elements using React
// */
// const header1 = React.createElement("h1", {
//     id:"h1",
//     style: {
//         color: "Orange",
//     }
// }, "This is 'h1' created using React");

// const header2 = React.createElement("h2", {
//     id:"h2",
//     style: {
//         color: "violet",
//     }
// }, "This is 'heading2' created using React");

// const div = React.createElement("div", {
//     id:"div",
//     style: {
//         backgroundColor: "yellow"
//     }
// }, [header1, header2]);


// const root = ReactDOM.createRoot(document.getElementById("root"));

// /**
//  *  If we want to replicate the following code using React
//  *  <div>
//  *          <h1>This is Heading</h1>
//             <ul>
//                 <li>About Me</li>
//                 <li>Home</li>
//                 <li>Career</li>
//             </ul>
//         </div>
// */

// const div2 = React.createElement("div",{},[
//     // Creating <h1></h1> inside the <div></div>
//     React.createElement("h1",{
//         id: "head1",
//         style: {
//             color:"red",
//             backgroundColor: "yellow"
//         }
//     },"This is Heading-1"),
//     // Creating <ul></ul> inside the <div></div>
//     React.createElement("ul",{},[
//         // Creating <li></li>
//         React.createElement("li", {}, "Home"),
//         React.createElement("li", {}, "Education"),
//         React.createElement("li", {}, "Work"),
//         React.createElement("li", {}, "About")
//     ])
// ])




// // React Element 
// const element = (
//     // the below code is JSX, hence we use className [works in JSX] instead of class [works in HTML]
//     <h3 className="head3">Third Heading inside the React Element</h3>
// )

// // Functional Component
// const FunctionalComponent = () => {
//     return (
//         <h4>
//             Fourth heading inside the Functional Component 2
//         </h4>
//     );
// };

// // here, as we have used Arrow fn, we have removed the return too
// const FunctionalComponent1 = () => (
//     <div>
//         <h1>Heading inside the Functional Component</h1>
//         <h2>Second Heading inside the Functional Component</h2>
//         {element}
//         <FunctionalComponent/>
//         {/* {FC()} // we can use this format too for injecting FC inside FC -> Component Composition */}
//         {/* {console.log(Math.PI)} // JS code used as expression inside JSX  */}
//     </div>
// );

// // rendering using Functional component
// root.render(<FunctionalComponent1/>);


// const root2 = (
//         <React.Fragment>
//             <h1>This is H1</h1>    
//             <h2>This is H2</h2>    
//         </React.Fragment>
// )
/***************************************************************************************************************** */