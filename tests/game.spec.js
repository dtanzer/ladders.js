class Dice {
	// eigentlich ist es nur eine function, aber dann schwerer stubbar.
	roll() {
		return Math.floor(Math.random() * 6 + 1);
	}
}
const dice = new Dice();

class SnakesAndLadders {
	constructor(links={}) {
		this.links = links;
	}
	from(start) {
		return this.links[start] || start;
	}
}

class Game {
	constructor(dice, snakeAndLadders) {
		this.dice = dice;
		this.snakeAndLadders = snakeAndLadders;
		this.startPlace = 1;
		this.endPlace = 10;
		this.ended = false;
	}
	start(...players) { // just did it because I could ;-)
		this.players = players;
		this.players[0].place = this.startPlace;
	}
	nextTurn() {
		const currentPlayer = this.players[0];
		currentPlayer.place = this.snakeAndLadders.from(currentPlayer.place + this.dice.roll());
		
		this.ended = currentPlayer.place >= this.endPlace;
	}
	hasEnded() {
		return this.ended;
	}
}

class Player {
	// TODO sehe das Feld nicht?
}

describe('dice', () => {
	it('exists', () => {
		expect(dice).not.toBeFalsy();
	});
	it('returns numer between 1 and 6 on "roll"', () => {
		for (let i = 0; i < 100; i++) {
			const eyes = dice.roll();
			expect(eyes).toBeGreaterThanOrEqual(1);
			//Wir kriegen den Test auch mit 2. Assert nicht rot. Egal -> kein TDD
			expect(eyes).toBeLessThanOrEqual(6);
			expect(eyes).toBe(Math.floor(eyes));
		}
	});
});

describe('snakesAndLaddersladders', () => {
	let snakesAndLadders;
	
	beforeEach(()=>{
		snakesAndLadders = new SnakesAndLadders({"4":7});
	});

	it('exists', () => {
		expect(snakesAndLadders).not.toBeFalsy();
	});
	it('has a ladder from 4 to 7', () => {
		expect(snakesAndLadders.from(4)).toBe(7);
	});
	it('has no ladder from 3', () => {
		expect(snakesAndLadders.from(3)).toBe(3);
	});
});

describe('player', () => {
	let player1;

	beforeEach(()=>{
		player1 = new Player();
	});

	it('exists', () => {
		expect(player1).not.toBeFalsy();
	});
});

describe('game', () => {
	let snakesAndLadders;
	let player1;
	let game;

	beforeEach(() => {
		snakesAndLadders = new SnakesAndLadders();
		game = new Game(dice, snakesAndLadders);
		player1 = new Player();
	});

	it('exists', () => {
		expect(game).not.toBeFalsy();
	});
	it('has a start place', () => {
		expect(game.startPlace).not.toBeFalsy();
	});

	it('has an end place', () => {
		expect(game.endPlace).not.toBeFalsy();
	});

	describe('started', () => {
		beforeEach(() => {
			game.start(player1);
		});

		it('starts, then player is at start place', () => {
			expect(player1.place).toBe(game.startPlace);
		});
		it('allows taking turns', () => {
			game.nextTurn();
		});
		it('moves player on turn', () => {
			dice.roll = () => 3;
			const lastPlace = player1.place;

			game.nextTurn();

			expect(player1.place).toBe(lastPlace + 3);
			expect(game.hasEnded()).toBe(false);
		});
		it('is not ended', () => {
			expect(game.hasEnded()).toBe(false);
		});
		it('ends when player is at end place', () => {
			dice.roll = () => 3;
			player1.place = game.endPlace-3;

			game.nextTurn();

			expect(game.hasEnded()).toBe(true);
		});
		it('ends when player is after end place', () => {
			dice.roll = () => 3;
			player1.place = game.endPlace - 2;

			game.nextTurn();

			expect(game.hasEnded()).toBe(true);
		});
		it('moves player up ladder', () => {
			dice.roll = () => 3;
			snakesAndLadders.from = () => 7;

			game.nextTurn();

			expect(player1.place).toBe(7);
		});
	});
});

// test list
// * niemand kann sich bewegen wenn es aus ist
// * snakes and ladders rendern unterschiedlich

// ---------

// copy existing test so it does not get reverted for new file
// we cannot create guiding test
// we commit after comments to not lose them
// every spell fix is a commit, yeah
// TDDaiymi aus "Angst"
// haben test geschrieben und dann auskommentiert und 3 schritte später erst bearbeitet -> wir haben gesehen es ist zu gross.
// Schritt viel zu groß ("turn"), wir würden gerne reverten ;)
// Angst code zu verlieren: "Dice" -> Schritt zu groß?
  // D: "Hoffentlich committed" -> P: "Schritt zu groß"
// "Du tippst zu schnell, tests noch nicht fertig" --> Unser Test-script ist schon zu langsam (9s)
// Tests auskommentieren widerspricht der Idee irgendwie?
  // einfach auskommentieren wollen wir nicht mehr machen zur Übung.
// wir achten nicht auf Baby Steps wie wir würden, wenn wir Baby Steps machen würden.
  // nach 2 Stunden P hofft immer noch auf compile und ist überrascht wenn nicht. 
  // Keine Incremente im 30 Sec Bereich. Warum nicht?
// wir machen auch nicht genaues TDD. Wir schauen was der Constraint mit uns macht.
  // focus?
// die exists tests sind blöd. Aber wir brauchen sie?
// ? ich habe Code geschrieben weil ich weis dass ich ihn brauche für den nächsten Test. Ist das gemogelt?
