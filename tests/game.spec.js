class Board {
	constructor(numberOfPlayers, size=4) {
		this.size = size;

		this.players = [];
		for (let player=0; player<numberOfPlayers; player++) {
			this.players[player] = 1;
		}

		this.currentPlayer = 0;
	}
	positionOf(player) {
		return this.players[player-1];
	}
	takeTurn(eyes = 1) {
		this.players[this.currentPlayer] += eyes;

		this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
	}
	winner() {
		for (let player=0; player<this.players.length;player++) {
			if (this.players[player] >= this.size) {
				return player + 1;
			}
		}
	}
}

describe('Board', () => {
	it('puts all players at position 1', () => {
		const game = new Board(2);
		expect(game.positionOf(1)).toBe(1);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players with roll 1', () => {
		const game = new Board(2);

		game.takeTurn(1);

		expect(game.positionOf(1)).toBe(2);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players with roll 1 on taking turns', () => {
		const game = new Board(2);

		game.takeTurn(1);
		game.takeTurn(1);
		game.takeTurn(1);

		expect(game.positionOf(1)).toBe(3);
		expect(game.positionOf(2)).toBe(2);
	});
	it('marks first player at end "4" as winner', () => {
		const game = new Board(1);
		
		game.takeTurn(1);
		game.takeTurn(1);
		game.takeTurn(1);

		expect(game.winner()).toBe(1);
	});
	it('has no winner below end "4"', () => {
		const game = new Board(1);

		game.takeTurn(1);
		game.takeTurn(1);

		expect(game.winner()).toBeUndefined();
	});
	it('marks second player at end "4" as winner', () => {
		const game = new Board(2);

		game.takeTurn(1);
		game.takeTurn(4);

		expect(game.winner()).toBe(2);
	});
});

// Diese kleinen Schritte, ich comitte mehrmals pro Test.
// Die assertion kommt am schluss, ist das gut?
// Tests entstehen schrittweise.
// Refactoren oft auf die Lösung und dann den Test hinzufügen für allgemeinen Code.
// Oft, die Struktur die man anpeilt wird eine darunterliegende Struktur.
// Regel? Immer nur im Test oder nur im Produktionscode was ändern. Dadurch schreibe ich Tests oft nachher.
// Das Kata ist so stark ähnlich wie Trivia.
// Keine besondere Kata.