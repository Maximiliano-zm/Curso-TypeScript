//argumentos rest es una funcion 
(()=>{
    const fullName = (firstName : string , ...restArgs:string[]) =>{
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('clark' , 'josep' , 'hent');

    console.log({superman})
})()