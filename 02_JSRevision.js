/**
 *  What is the main difference between arrow function and normal function? 
 *      - arrow functions do not have their own "this" binding. 
 *      - Instead, they inherit the "this" binding of the scope in which they are defined. [i.e., inherits parent's this]
*/

// case - 1
let obj = {
    fn1: function () {
        console.log(this);
    },
    fn2: () => {
        console.log(this);
    }
}
obj.fn1();      // Obj
obj.fn2();      // window / {}


// case - 2
// function x() {
//     console.log(this);

//     function y() {
//         console.log(this);

//         function z() {
//             console.log(this);
//         }
//         z()     // window / global Obj
//     }
//     y()     // window / global Obj
// }
// x()     // window / global Obj

/**
 *  - So, "this" doesn't depend on, where it is defined
 *  - It will depend on how it is called
*/


// case - 3
let person1 = {
    name: "Siva"
}

let person2 = {
    name: "Kumar"
}

function n() {
    console.log(this);
}

// n()                 // window / global obj
// n.call(this);       // window / {} obj
// n.call(person1);    // person1 Obj
// n.call(person2);    // person2 Obj

/**
 *  call():
 *  -------
 *      - Calls a method of an object, substituting another object for the current object.  
 *      - arg --> The object to be used as the current object.
*/



// case - 4
let person3 = {
    name: "Siva",
    n: function() {
        console.log(this);
    }
}

let person4 = {
    name: "Kumar"
}

// person3.n();                // person3 Obj
// person3.n.call();           // window / global obj
// person3.n.call(this);       // window / {} obj
// person3.n.call(person4);    // person4 obj



// case - 5
let person5 = {
    name: "Siva",
    n: () => {
        console.log(this);
    }
}

let person6 = {
    name: "Siva"
}

person5.n();                // window / {}
person5.n.call();           // window / {}
person5.n.call(this);       // window / {}
person5.n.call(person6);    // window / {} 



/**
 *  Interview Preparation:
 *  ----------------------
 *      - Communication Skills are as IMP as Techincal Skills
 *              - Speak your thoughts, while you code
 *              - If you can't Explain, then Interviewer thinks you don't know
 *              - We should be good in English, as we need to speak & share our thoughts in the Organisation
 *  
 *  CONFIDENCE COMES FROM PREPARATION 
*/