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

    cardType : "creature",
    subType : "giant warrior",
    expansion : {
        expansionID : 157,
        name : "commander2015",
        rarity : "rare",
    },

    flavourText : {
        author : "Belko",
        quote : "Oh certo, bevono un sacco di birra, ma dopo le loro visite devo sempre ricostruire la taverna."
    },

    abilities :
        {
          description : "Hammerfist Giant deals 4 damage to each creature without flying and each player."
        },

    illustrator: {
        name : "Carl",
        surname : "Critchlow"
    },

    cardImage : "img/pugnodiferro.png",

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

let cardDisplayHTML =
`<ul class= "card-element">
      <li>Name: ${card.name}</li>
      <li>Launch combined cost: ${card.convertedManaCost()}</li>
      <li>Specific launch cost: ${card.launchCost}</li>
      <li>Card type: ${card.cardType} ${card.subType}</li>
      <li>Expansion:
           <ul class= "expansions">
               <li>Name: ${card.expansion.name}</li>
               <li>Rarity: ${card.expansion.rarity}</li>
           </ul>
      </li>
      <li>Flavour Text: ${card.flavourText.author} <em>${card.flavourText.quote}</em></li>
      <li>Illustrator: ${card.illustrator.name} ${card.illustrator.surname} </li>
      <li>Abilities: ${card.abilities.description}  </li>
      <img src="${card.cardImage}"
</ul>`;

console.log(card.cardImage);

document.getElementById("deck").innerHTML += cardDisplayHTML;