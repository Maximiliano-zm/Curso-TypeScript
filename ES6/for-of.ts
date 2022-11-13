(()=>{
    type Avenger = {
        name : string,
        weapon : string,
    }

    const ironman : Avenger = {
        name : 'iron man',
        weapon : 'armorsuit'
    }

    const capitanAmerica : Avenger = {
        name : 'capitan america',
        weapon : 'escudo'
    }

    const thor : Avenger = {
        name : 'thor',
        weapon : 'mjornir'
    }

    const avengers : Avenger[] = [ironman , capitanAmerica , thor];

    for (const avenger of avengers) {
        console.log(avenger.name ,'/', avenger.weapon)
    }

})()