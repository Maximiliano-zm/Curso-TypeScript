(()=>{

    interface Client {
        name : string;
        age ?: number;
        address : Address;
    }

    interface Address {
        id : number,
        zip : string,
        city : string
    }
    const client: Client ={
        name : 'max',
        age : 25,
        address: {
            id: 125,
            zip : 'ky2 sud',
            city : 'santiago'
        }
    }

    const client2 : Client = {
        name: 'pepe',
        age : 30,
        address : {
            id :111,
            zip : 'ky3 sud',
            city : 'santiago2'
        }
    }

    console.log(client)
    
    
})()