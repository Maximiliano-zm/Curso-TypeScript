//parametros obligatorios ej
(()=>{
    const fullname = (firstName :string , lastName :string):string => {
        return `${firstName} ${lastName}`
    }

    const name = fullname('Tony' , 'Stark');

})()