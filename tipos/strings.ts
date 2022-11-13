(()=>{

    //tipos de forma de definir un string
    const batman: string = 'batman';
    const linternaVerde: string  = "Linterna's Verde";
    const volcanNegro: string  = `Heroe volcan negro`;
    const abc = 123;
    
    console.log(`im'm ${batman}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'no esta presente');
})()