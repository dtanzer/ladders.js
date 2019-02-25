const dice = {
	roll() {
		return Math.floor(Math.random() * 6 + 1);
	}
};

const game = {
	startPlace: 1,
	start(player) {
		this.player = player;
		player.place = this.startPlace;
	},
	takeTurn() {
		this.player.place += dice.roll();
	}
};
const player1 = {

};

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

describe('player', () => {
	it('exists', () => {
		expect(player1).not.toBeFalsy();
	});
});

describe('game', () => {
	it('exists', () => {
		expect(game).not.toBeFalsy();
	});
	it('has a startplace', () => {
		expect(game.startPlace).not.toBeFalsy();
	});
	it('starts, then player is at start place', () => {
		game.start(player1);
		expect(player1.place).toBe(game.startPlace);
	});
	it('turn', () => {
		game.start(player1);
		dice.roll = () => 3;
		const lastPlace = player1.place;

		game.nextTurn();

		expect(player1.place).toBe(lastPlace + 3);
	});
});

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