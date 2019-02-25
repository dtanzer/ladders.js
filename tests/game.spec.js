class Game {
	constructor(numberOfPlayers) {
		this.players = [];
		for (let i=0; i<numberOfPlayers; i++) {
			this.players[i] = 1;
		}
		this.currentPlayer = 0;
	}
	positionOf(player) {
		return this.players[player-1];
	}
	takeTurn() {
		this.players[this.currentPlayer] += 1;

		this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
	}
	winner() {
		if (this.players[0]<4) {
			return void 0;
		}
		return 1;
	}
}

describe('Game', () => {
	it('starts all players at position 1', () => {
		const game = new Game(2);
		expect(game.positionOf(1)).toBe(1);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players with roll 1', () => {
		const game = new Game(2);
		game.takeTurn();
		expect(game.positionOf(1)).toBe(2);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players with roll 1 on taking turns', () => {
		const game = new Game(2);
		game.takeTurn();
		game.takeTurn();
		game.takeTurn();
		expect(game.positionOf(1)).toBe(3);
		expect(game.positionOf(2)).toBe(2);
	});
	it('marks first player at end "4" as winner', () => {
		const game = new Game(1);
		game.takeTurn();
		game.takeTurn();
		game.takeTurn();
		game.takeTurn();
		expect(game.winner()).toBe(1);
	});
	it('has no winner below end "4"', () => {
		const game = new Game(1);
		expect(game.winner()).toBeUndefined();

	});
});
