1. ## Why to learn React..?
    - Is it because of market hype & trend, more jobs or build UI..?    --> NO
    - It makes "easy to manage & build complex Front-End"

### NOTE:
    - Most projects don't require React in initial phase, It can be don using JS only

2. ## Why React was created..?
    - Phantom/Ghost message problem in FB.
    - Having no unread messages in a folder.  Yet, still shows an unread message count on folder icon
    - This happens due to inconsistency in UI, which is due to sync problem between state(msnsged by JS) & UI(DOM)
    - React was developed to tackle this problem

3. ## Is React a library (or) Framework..?
    - React is a Library

4. ## Difference between a library & a framework..?
    - Both frameworks and libraries are code written by someone else that is used to help solve common problems.
    - The technical difference between a framework and library lies in a term called "inversion of control".
            - When you use a library, you are in charge of the flow of the application
            - You are choosing when and where to call the library. [we plug in the library code in our own code]
            - When you use a framework, the framework is in charge of the flow
            - It provides some places for you to plug in your code, but it calls the code you plugged in as needed

5. ## What is React..?
    - React is a JS library for building User Interfaces

6. ## What is the shortest JS program..?
    - The shortest JS program is **empty file**. Because even then, JS engine does a lot of things.

### IMP NOTE:
------------
    1. An app fully built with React will usually only have one createRoot call for its root component & only one root.render
    2. React will Overide whatever inside the “root” element with the whatever we give within the render
    3. React will take some time to load the 2 script files [ we can see in network tab ], hence we can see some lag in displaying the React components [ meanwhile JS/HTML components are displayed ]
    4. Order of script files/tags are Important


- Using these React.createElement, ReactDOM.createRoot &  root.render is a hefty task,
- Hence, we will use another thing called JSX, which will be very easy to do the same thing

**************************************************************************************************************************

