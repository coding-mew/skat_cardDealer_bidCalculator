// 1. array with all available cards

let cardDeck = 
["Clubs 7", "Clubs 8", "Clubs 9", "Clubs 10", "Clubs J", "Clubs Q", "Clubs K", "Clubs A",
"Spades 7", "Spades 8", "Spades 9", "Spades 10", "Spades J", "Spades Q", "Spades K", "Spades A",
"Hearts 7", "Hearts 8", "Hearts 9", "Hearts 10", "Hearts J", "Hearts Q", "Hearts K", "Hearts A",
"Diamonds 7", "Diamonds 8", "Diamonds 9", "Diamonds 10", "Diamonds J", "Diamonds Q", "Diamonds K", "Diamonds A"];


// 2. randomize cardDeck
const randomDeck = (array)=> {
    // starting from the end of the cardDeck-array
    let currentIndex = array.length;
    let randomIndex;
    let player1, player2, player3, skat;
    // 2.1 function will only be called until the index =0
    while (currentIndex != 0) {
  
    // 2.2 pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
    // 2.3 counting downwards from array.length
      currentIndex--;
  
    // 2.4 swap randomelement with the current one
      [array[currentIndex], array[randomIndex]] 
      = 
      [ array[randomIndex], array[currentIndex]];
    }
    // 2.5 slice the array to deal 10 cards/person + 2 for skat
    player1 = array.slice(0,10)
    player2 = array.slice(10,20)
    player3 = array.slice(20,30)
    skat = array.slice(30,32)

    // 3. return shuffled array, sliced and formatted to the needs.
    return `\n Player 1 gets the following cards: \n ${player1}. \n  \n Player 2 gets the following cards:  \n ${player2}. \n  \n Player 3 gets the following cards:  \n ${player3}. \n  \n The skat is:  \n ${skat} \n`;
  }
 
  console.log(randomDeck(cardDeck));
  console.log(cardDeck);


  

