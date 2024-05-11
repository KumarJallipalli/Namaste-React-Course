
import React  from "react";
import ReactDOM  from "react-dom/client";

// Header Component
const Header = () => (
    <div className="header">
        <div>
            <a href="/">
                <img alt="Logo" className="logo"
                src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"/>
            </a>
            <h1><span style = {{color: "orange"}}>Food</span>elivery</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)


// Body Component

// // 1. This is hardcoded data, but in real life, data is dynamic & comes from API's
// const Body = () => (
//     <div className="card">
//         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
//         <h2>Burger King</h2>
//         <h3>4.2 &#9733; </h3>
//         <p>Burger, American</p>
//     </div>
// )


// // 2. This data is only for 1 card, But we need data for all the cards which comes in an Object [array of Obj]
// const burgerKing = {
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     name: "Burger King",
//     rating: "4.2",
//     cuisine: ["Burger", "American"]
// }
//
// const RestuarantCrad = () => (
//     <div className="card">
//         <img src={burgerKing.img} />
//         <h2>{burgerKing.name}</h2>
//         <h3>{burgerKing.rating} &#9733; </h3>
//         {/* {Since the cuisine data comes in the form of Array, we used join } */}
//         <p>{burgerKing.cuisine.join(", ")}</p>
//     </div>
// )

// 3. Replicating the dynamic data from API's in the forkm of an Array of Object
const restuarantList = [
    {
        data: {
            mediaAssetsImgId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            name: "Burger King",
            rating: "4.2",
            cuisine: ["Burger", "American"]
        }
    },
    {
        data: {
            mediaAssetsImgId: "d0450ce1a6ba19ea60cd724471ed54a8",
            name: "Domino's Pizza",
            rating: "4.3",
            cuisine: ["Pizzas", "Italian", "Pastas"]
        }
    },
    {
        data: {
            mediaAssetsImgId: "iilzuwozsxajwgiloppo",
            name: "Thick Shake Factory",
            rating: "4.1",
            cuisine: ["Beverages", "Ice Creams", "Juices"]
        }
    },
    {
        data: {
            mediaAssetsImgId: "uxh321ykb0tqkexpgcgr",
            name: "Srinivasa Tiffins & Meals",
            rating: "4.4",
            cuisine: ["South Indain", "Andhra"]
        }
    }
]


/**
 *  Case - I: Normal way
 *      - Receiving the React props which are passed during the <RestuarantCrad restuarant = {restuarantList[0]}/>
 *      - Hemce, we are receiving those params as "props" [we can use any name]
 * 
 */
// const RestuarantCrad = (props) => (
//     <div className="card">
//         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.restuarant.data.mediaAssetsImgId} />
//         <h2>{props.restuarant.data.name}</h2>
//         <h3>{props.restuarant.data.rating} &#9733; </h3>
//         {/* {Since the cuisine data comes in the form of Array, we used join } */}
//         <p>{props.restuarant.data.cuisine.join(", ")}</p>
//     </div>
// )



/**
 *  Case - II: Object destruction sepeartely inside the function 
 *      - The above is the normal way of doing the things
 *      - We can also use the Obj destruction & remove the repetetion of "props.restuarant.data"
*/
// This is Object destruction during the parameters reception
// const RestuarantCrad = ( {restuarant} ) => {
//     // This is general Object destruction to NOT to repeat "restuarant.data"
//     const {name, mediaAssetsImgId, cuisine, rating } = restuarant.data
//     return (
//         // This below line of code is not working, as there was ambuigity with {}
//         // { const {name, mediaAssetsImgId, cuisine, rating } = restuarant.data }
//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + mediaAssetsImgId} />
//             <h2>{name}</h2>
//             <h3>{rating} &#9733; </h3>
//             {/* {Since the cuisine data comes in the form of Array, we used join } */}
//             <p>{cuisine.join(", ")}</p>
//         </div>
//     )
// }
//
// const Body = () => (
//     <div className="restuarantList">
//         {/* {Passing the React Props inside the functional components as shown below} 
//             {here, "restuarant" is passed as argument which took the default param restuarantList[0]}
//             {Since, this is nothing but a normal function call/execution }
//             {In this way, we can pass arguments in functional COmpoents}    
//             {This is same as {RestuarantCrad (restuarant = restuarantList[0] )}  */}
//         {/* {RestuarantCrad (restuarant = restuarantList[0])}   -> // This works differently, Henec commented */}
//         <RestuarantCrad restuarant = {restuarantList[0]}/>
//         <RestuarantCrad restuarant = {restuarantList[1]}/>
//         <RestuarantCrad restuarant = {restuarantList[2]}/>
//         <RestuarantCrad restuarant = {restuarantList[3]}/>

//         {/* {The above code can be optimised using maps, this is the actual methods of doing} */}
//         {restuarantList.map( (i) => {
//             return <RestuarantCrad restuarant = {i}/>
//         } )}
//     </div>
// )


/**
 *  Case - III: Object Destruction directly during the argument passing
 *      - Similar to how we used the obj destrcution during the parameters reception itself
 *      - We will use the same thing to destruct all the variablkes using "spread (...) opeartor"
*/
const RestuarantCrad = ( {name, mediaAssetsImgId, cuisine, rating} ) => (
        // This below line of code is not working, as there was ambuigity with {}
        // { const {name, mediaAssetsImgId, cuisine, rating } = restuarant.data }
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + mediaAssetsImgId} />
            <h2>{name}</h2>
            <h3>{rating} &#9733; </h3>
            {/* {Since the cuisine data comes in the form of Array, we used join } */}
            <p>{cuisine.join(", ")}</p>
        </div>
    )

const Body = () => (
    <div className="restuarantList">
        {/* Here, we need to use the (...) to send the data so that params can be destructed
            But make sure that we are destructing the "restuarant.data", hence we passed like below
            But, This will throw error "<RestuarantCrad resturant = {...restuarantList[0].data}/>"  
                Cuz, again we are passing a sible Object "restuarant", hence only 1st obj will receive this */}
        <RestuarantCrad {...restuarantList[0].data}/>
        <RestuarantCrad {...restuarantList[1].data}/>
        <RestuarantCrad {...restuarantList[2].data}/>
        <RestuarantCrad {...restuarantList[3].data}/>

        {/* {The above code can be optimised using maps, this is the actual methods of doing} */}
        {restuarantList.map( (i) => {
            return <RestuarantCrad {...i.data}/>
        } )}
    </div>
)

const Footer = () => (
    <h3>Footer</h3>
)

const AppComponent = () => {
    return (
        <React.Fragment>
                {
                /**
                *  - Header
                *      - Logo
                *      - List Items [nav]
                *      - Cart
                * 
                *  - Body
                *      - search
                *      - Restaurant Cards
                *          - Image
                *          - Nmae
                *          - Rating
                * 
                *  - Footer
                *      - links
                *      - copyrights
                * 
                */
            }
            
            <Header />
            <Body/>
            <Footer/>

        </React.Fragment>
    )
}





// Can we use 2 React Fragments in JSX..?
const jsx = (
    <>
        <React.Fragment>
            <h2>This is Heading2</h2>
            <>
                <h3>This is Heading 3</h3>
            </>
        </React.Fragment>
        <React.Fragment>
            <h4>This is Heading 3</h4>
        </React.Fragment>
    </>
)
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)
// root.render(jsx)







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