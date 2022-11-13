(()=>{
    //funcion que no  regresa nada 'void' no es lo mismo que un null y undefined
    const callBatman = ():void =>{
        return;
    }
    const a =  callBatman()

    console.log(a)
})()