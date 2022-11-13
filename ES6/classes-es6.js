(()=>{
    class Avenger {
        name;
        power;

        constructor(name ='no name', power = 0){
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvengers extends Avenger {
        fly;
        constructor(){
            super()
            this.fly = true
        }
    }

    const hulk = new Avenger('hulk',9001)
    const falcon = new FlyingAvengers()


    console.log(falcon)
    console.log(hulk)
    
})()