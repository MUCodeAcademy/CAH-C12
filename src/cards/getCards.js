// data is split by packs
// each pack has a "name" and corresponding "pack" number, 
// they also each have their own "white" and "black" cards
// set up in json file like this: 
//  [{"name": "XYZ", "white":[{}], "black":[{}]},
//   {"name": "XYZ", "white":[{}], "black":[{}]}, . . .]
// Names and corresponding pack numbers: 
// "CAH Base Set", "pack":0
// "90s Nostalgia Pack", "pack": 1
// "Absurd Box Expansion", pack" : 2
// "CAH: 2000s Nostalgia Pack", "pack": 3
// "CAH: A.I. Pack", "pack": 4
// "CAH: Ass Pack", "pack": 5
// "CAH: College Pack", "pack": 6
// "CAH: Fifth Expansion", "pack": 7
// "CAH: First Expansion", "pack": 8
// "CAH: Fourth Expansion", "pack": 9
// "CAH: Human Pack", "pack": 10
// "CAH: Main Deck", "pack": 11
// "CAH: Second Expansion", "pack": 12
// "CAH: Sixth Expansion", "pack": 13
// "CAH: THird Expansion", "pack": 14
// "Dad Pack", "pack": 15
// "Food Pack", "pack": 16
// "World Wide Web Pack", "pack": 17
// "Geek Pack", "pack": 18

import React, {useState} from 'react';
import cardObj from './cah-cards-full.json';

export default function getCards() {

   //const cardObj = require('./cah-cards-full.json');
   const CAH = JSON.parse(cardObj);
   const [cardSets, setCardSets] = useState([]);

   for(let i = 0; i < 18; i++) {
    setCardSets([...cardSets, CAH.name[i]]);
   }

    
   return (
    <div>
        {
            CAH && CAH.map((card, index) => {
                return (
                    <div key={index}>
                    {card.name && card.name.map(card => (
                        <div>
                            {card.white.map((card) => {
                                return card.text;
                            })}
                        </div>
                    ))}
                    </div>
                )
            })
        }
    </div>
   );
}
