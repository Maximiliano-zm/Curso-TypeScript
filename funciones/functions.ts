(()=>{
    const hero : string ='flash'
    function returnName():string {
        return hero;
    }

    const activateBatsignal = () :string =>{
        return 'batsignal'
    }

    console.log(typeof activateBatsignal);

    const heroName = returnName();
})()