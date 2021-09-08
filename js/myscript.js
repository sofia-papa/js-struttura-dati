//Ripetiamo il lavoro fatto oggi in classe sulla rappresentazione logica di una carta magic, 
//senza obblighi ma motivando (possibilmente nei commenti) quali strutture dati o tipi di dati state utilizzando e magari perché.
//Al termine della parte logica, rappresentate i dati a schermo come volete,
//magari inventandovi modi carini o speciali per visualizzare i vostri dati...
let card = {
    name : "Gigante Pugnodiferro",
    launchCost : {
        common : 4,
        white : 0,
        ublue : 0,
        black : 0,
        red : 2,
        green : 0,
    },

    convertedManaCost :
    function(){
        let sum = 0;
        for ( let mana in this.launchCost){
            sum += this.launchCost[mana];
        }
        return sum;
    },
};

console.log(card);