//parametros opcional : para dejar un parametro opcional de debe color un signo ?
(()=>{
    const fullname = (firstName :string , lastName?:string):string => {
        return `${firstName} ${lastName || 'no lastName'}`
    }

    const name = fullname('Tony');
    
    console.log({name})
})()