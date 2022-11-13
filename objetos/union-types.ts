(()=>{

    type Hero ={
        name : string,
        age?: number,
        powers: string[];
        getName?: ()=> string;
    
    }

    let myCustomVariable: (string | number | Hero) = 'max';
    console.log( typeof myCustomVariable)

    myCustomVariable = 20;
    console.log( typeof myCustomVariable)
    
    myCustomVariable = {
        name : 'bruce',
        age : 43,
        powers : ['1']
    }

    console.log(myCustomVariable)
})()

