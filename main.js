"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    // desestructuracion de un objetos para ser utilizado en una funcion o algo req 
    const avengers = {
        nick: 'samuel l.jacson',
        ironman: 'rober dawn hr.',
        vision: 'paul bett',
        activo: true,
        poder: 1500
    };
    // const {poder,vision} = avengers
    // console.log(poder , vision.toUpperCase())
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision.toUpperCase(), resto);
    };
    printAvenger(avengers);
    const avengersArr = ['cap america', true, 150];
    const [capi, ironman, seriaUnNumero] = avengersArr;
    // console.log({ironman,capi,seriaUnNumero})
})();
(() => {
    const ironman = {
        name: 'iron man',
        weapon: 'armorsuit'
    };
    const capitanAmerica = {
        name: 'capitan america',
        weapon: 'escudo'
    };
    const thor = {
        name: 'thor',
        weapon: 'mjornir'
    };
    const avengers = [ironman, capitanAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, '/', avenger.weapon);
    }
})();
(() => {
    const a = 'max';
    console.log(a);
    const getName = () => {
        console.log('viejo getName');
    };
    // getName = ()=> console.log('nuevo getName')
    // getName();
})();
//# sourceMappingURL=main.js.map