// server side-pre-rendered
// server components means that console log will be printed on the server side
// and not on the client side
// client side means that console log will be printed on the client side(in the browser)
// the function in the clinet side like static text are still rendered on server side and button that require user interaction are rendered on the client side
'use client';
 // now the page will be loaded on client side and not on server side

function Hello() {
    console.log("Hello from the client side!");
    return <h1>Hello from the client side!</h1>;
}
export default Hello;