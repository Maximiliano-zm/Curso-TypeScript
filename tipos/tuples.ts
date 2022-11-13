(()=>{
    // las tuples son buenas para controlar que tipo de dato esta en orden
    const hero:[string ,number,boolean] = ['dr strange ', 100 , true];
    hero[0] = 'ironman';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero)
})()