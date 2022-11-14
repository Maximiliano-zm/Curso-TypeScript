(()=>{

    interface Client {
        name : string;
        age ?: number;
        address : Address;
        getFullAddress(id : string) :void;
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
        },
        getFullAddress(id :string) {
            return this.address.city
        }
    }

    const client2 : Client = {
        name: 'pepe',
        age : 30,
        address : {
            id :111,
            zip : 'ky3 sud',
            city : 'santiago2'
        },
        getFullAddress(id :string) {
            return this.address.city
        }
    }

    console.log(client)
    
    
})()