(()=>{

    // los tipos esta creados para dar reglas o argumentos

    type Hero ={
        name : string,
        age?: number,
        powers: string[];
        getName?: ()=> string;

    }

    let flash : Hero = {
        name :'barry allen',
        age : 24,
        powers: ['super velocidad' , 'viajar en el tiempo']
    }


    let superman: Hero = {
        name :'allen pepe',
        age : 60,
        powers: ['super velocidad'],
        getName(){
            return this.name;
        }
    }

})()