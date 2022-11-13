//parametros opcional : para dejar un parametro opcional de debe color un signo ?
(()=>{
    const fullname = (firstName :string , lastName?:string , upper: boolean = false):string => {
        if (upper) {
        return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }else{
        return `${firstName} ${lastName || 'no lastName'}`
        }
    }

    const name = fullname('Tony','stark',true);
    
    console.log({name})
})()