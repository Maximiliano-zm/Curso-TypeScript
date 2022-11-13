(()=>{
    let flash: {name: string , age?: number , powers : string[] , getName?: ()=> String} = {
        name :'barry allen',
        age : 24,
        powers: ['super velocidad' , 'viajar en el tiempo']
    }


    let superman: {name: string , age?: number , powers : string[] , getName?: ()=> String} = {
        name :'allen pepe',
        age : 60,
        powers: ['super velocidad']
    }

    console.log(flash);

    // flash = {
    //     name : 'superman',
    //     // age : 60,
    //     powers : ['super fuerza'],
    //     getName(){
    //         return this.name
    //     }
    // }

    // console.log(flash.getName())
    
    


})()