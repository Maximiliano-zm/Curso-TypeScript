(()=>{
    const addNumber = (a:number , b:number)=> a+b;
    const greet = (name : string)=> `hola ${name}`;
    const saveThewolrd = ()=> `el mundo esta salvado`;

    let myFunction: (y:number , z:number)=> number; 

    // myFunction = 10;
    // console.log(myFunction)

    myFunction = addNumber
    console.log(myFunction(1,2));

    // myFunction = greet
    // console.log(myFunction('maxi'));

    // myFunction = saveThewolrd;
    // console.log(myFunction());
})()