(()=>{

    let avenger :any = 123;
    let exists;
    let power;

    avenger = 'dr Strange';
    // console.log(avenger.charAt(0))

    //tipo de casteo : trata el tipo any a tipo string
    console.log((avenger as string).charAt(0));
    avenger = 150.2322
    // console.log(avenger.toFixed(2))
    //otro tipo de casteo : trata el tipo any a tipo number
    console.log(<number> avenger.toFixed(2));
    console.log(exists , 'exists');
    console.log(power , 'power');
})()