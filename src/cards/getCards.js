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
import cardObj from './cah-cards-full.json';

export function getWhiteCards (min, max) {
    let lMin = min;
    let lMax = max;

    const verifyInput = (min ,max) => {
        if(max < 19 && min >= 0){
            if(min < max) {} else if(max < min){
                lMax = min;
                lMin = max;
            }
            else{
                console.error("Unaccesable set bounds");
            }
        }
    }
    verifyInput(lMin,lMax);
    const whiteCards = [];

    for (let i = lMin; i < lMax; i++) {
        let index = cardObj.filter(obj => obj.name === cardObj[i].name);
        let curWhites = index[0].white;
        for(let z = 0; z < curWhites.length; z++){
            whiteCards.push(curWhites[z].text);
        };
    };
    
    return whiteCards.map((item,index) => {
        return <div key={index}>{item}</div>
    })
}

export function getBlackCards(min,max) {
    let lMin = min;
    let lMax = max;

    const verifyInput = (min ,max) => {
        if(max < 19 && min >= 0){
            if(min < max) {} else if(max < min){
                lMax = min;
                lMin = max;
            }
            else{
                console.error("Unaccesable set bounds");
            }
        }
    }
    verifyInput(lMin,lMax);
    const blackCards = [];

    for (let i = lMin; i < lMax; i++) {
        let index = cardObj.filter(obj => obj.name === cardObj[i].name);
        let curBlacks = index[0].black;
        for(let z = 0; z < curBlacks.length; z++){
            blackCards.push(curBlacks[z].text);
        };
    };
    
    return blackCards.map((item,index) => {
        return <div key={index}>{item}</div>
    })
};