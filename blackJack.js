


var cardSuit = ["h", "c", "d", "s"];
var cardString = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var cardInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
var cards = [];

class Card {
    constructor(string, int, suit) {
        this.string = string;
        this.int = int;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        for(var n in cardString)
        {
            for(var s in cardSuit)
            {
                const card = new Card(cardString[n], cardInt[n], cardSuit[s]);
                this.deck.push(card);
            }
        }
    }
    shuffleDeck() {

        for(var c in this.deck) {
            var randomIndex = Math.floor(Math.random() * 52 + 1);
            var temp = this.deck[c];
            this.deck[c] = this.deck[randomIndex];
            this.deck[randomIndex] = temp;
        }
    }
    reset() {
        const deckTest = new Deck();
        this.deck = [];
        this.deck = deckTest;
        console.log("DECK TEST: ", deckTest)
    }
    dealCard() {
        this.shuffleDeck();
        var card = this.deck.pop();
        console.log("CARD: ", card);
        return card;
    }
}

class Player extends Deck {
    constructor(name) {
        super(name);
        this.name = name;
        this.hand = [];
    }
    takeCard() {
        this.hand.push(this.dealCard());
    }
    discard(int) {
        for(var c in this.hand){
            if(hand[c].int == int)
            {
                this.hand.slice(hand[c]);
            }
            
        }
    }
    total() {
        var total = 0;
        for(var c in this.hand){
            if(this.hand[c]['int'] == 'j' || this.hand[c]['int'] == 'q' || this.hand[c]['int'] == 'k') {
                total += 10;
            }
            else {
                total += this.hand[c]['int'];
            }
        }
        console.log("Total: ", total);
        return total;
    }
}


const test = new Deck();
const player1 = new Player("Jim");
player1.takeCard();
player1.takeCard();
player1.total();
test.reset()
console.log("Test: ", test);
// console.log("!!!!!: ", player1.hand[0].int);
// console.log("Player hand: ", player1.hand);


