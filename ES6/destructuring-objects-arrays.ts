(()=>{

    // desestructuracion de un objetos para ser utilizado en una funcion o algo req 

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers : Avengers ={
        nick : 'samuel l.jacson',
        ironman : 'rober dawn hr.',
        vision : 'paul bett',
        activo : true,
        poder : 1500
    }

    // const {poder,vision} = avengers
    // console.log(poder , vision.toUpperCase())

    const printAvenger = ({vision , ...resto}:Avengers)=>{
        console.log(vision.toUpperCase() , resto)
    }
    printAvenger(avengers)


    const avengersArr : [string , boolean,number] = ['cap america' , true , 150]

    const [capi,ironman,seriaUnNumero] = avengersArr;
    // console.log({ironman,capi,seriaUnNumero})
})()

