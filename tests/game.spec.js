const dice = {
	// eigentlich ist es nur eine function, aber dann schwerer stubbar.
	roll() {
		return Math.floor(Math.random() * 6 + 1);
	}
};

class Game {
	constructor(dice) {
		this.dice = dice;
		this.startPlace = 1;
		this.endPlace = 10;
		this.ended = false;
	}
	start(...players) { // just did it because I could ;-)
		this.players = players;
		this.players[0].place = this.startPlace;
	}
	nextTurn() {
		this.players[0].place += this.dice.roll();
		this.ended = this.players[0].place >= this.endPlace;
	}
	hasEnded() {
		return this.ended;
	}
}

let game;
const player1 = {
	// TODO sehe das Feld nicht?
};

class Ladders {
	constructor(links={}) {
		this.x = links;
	}
	from(start) {
		return this.x[start];
	}
}

const ladders = new Ladders({"4":7});

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

describe('ladders', () => {
	it('exists', () => {
		expect(ladders).not.toBeFalsy();
	});
	it('has a ladder from 4 to 7', () => {
		expect(ladders.from(4)).toBe(7);
	});
	it('has no ladder from 3', () => {
		expect(ladders.from(3)).toBeUndefined();
	});
});

describe('player', () => {
	it('exists', () => {
		expect(player1).not.toBeFalsy();
	});
});

describe('game', () => {

	beforeEach(() => {
		game = new Game(dice);
	});

	it('exists', () => {
		expect(game).not.toBeFalsy();
	});
	it('has a start place', () => {
		expect(game.startPlace).not.toBeFalsy();
	});
	it('starts, then player is at start place', () => {
		game.start(player1);
		expect(player1.place).toBe(game.startPlace);
	});
	it('allows taking turns', () => {
		game.start(player1);
		game.nextTurn();
	});
	it('moves player on turn', () => {
		game.start(player1);
		dice.roll = () => 3;
		const lastPlace = player1.place;

		game.nextTurn();

		expect(player1.place).toBe(lastPlace + 3);
		expect(game.hasEnded()).toBe(false);
	});
	it('has an end place', () => {
		expect(game.endPlace).not.toBeFalsy();
	});
	it('is not ended', () => {
		expect(game.hasEnded()).toBe(false);
	});
	it('ends when player is at end place', () => {
		game.start(player1);
		dice.roll = () => 3;
		player1.place = game.endPlace-3;

		game.nextTurn();

		expect(game.hasEnded()).toBe(true);
	});
	it('ends when player is after end place', () => {
		game.start(player1);
		dice.roll = () => 3;
		player1.place = game.endPlace - 2;

		game.nextTurn();

		expect(game.hasEnded()).toBe(true);
	});

});
// test list
// * niemand kann sich bewegen wenn es aus ist

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